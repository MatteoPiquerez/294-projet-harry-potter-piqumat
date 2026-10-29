<template>
  <v-container>
    <h1 class="text-h3 text-center my-6"></h1>

    <!-- Squelettes de chargement pendant la requête API -->
    <v-row v-if="characterStore.isLoading">
      <v-col
        v-for="n in 8"
        :key="n"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <v-skeleton-loader
          height="350"
          type="image, article"
        />
      </v-col>
    </v-row>

    <!-- Message d'erreur si aucun sortilèges n'est chargé -->
    <v-alert
      v-else-if="characterStore.totalSpells === 0"
      class="mb-6"
      type="error"
      variant="tonal"
    >
      Impossible de charger les Sortilèges. Vérifiez que l'API tourne sur
      {{ apiUrl }}.
    </v-alert>

    <!-- Grille de cartes (cas normal) -->
    <v-row v-else>
      <v-col
        v-for="spell in characterStore.spells"
        :key="spell.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <spell-card :spell="spell" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Import du store et de storeToRefs
import {storeToRefs} from 'pinia'
import {useCharacterStore} from '@/stores/characterStore.js'

// URL de l'API pour le message d'erreur
const apiUrl = import.meta.env.VITE_API_URL || 'https://apis.divtec.me/api/harrypotter'

// Instancier le store
const characterStore = useCharacterStore()

// Destructurer le state en gardant la réactivité
// storeToRefs convertit chaque propriété du state en ref
const {characters} = storeToRefs(characterStore)

/**
 * Variables réactives pour la recherche, le filtre et le tri
 * ref() est auto-importé grâce à unplugin-auto-import
 */
const searchQuery = ref('')
const selectedSpecies = ref(null)
const sortOrder = ref('asc')

/**
 * COMPUTED CHAÎNÉS : Chaque étape filtre ou transforme le résultat de la précédente
 */

/**
 * Étape 1 : Filtrer par type
 * Si un type est sélectionné, ne garder que les Pokémon qui possèdent ce type
 */
const filteredBySpecies = computed(() => {
  if (!selectedSpecies.value) {
    return characterStore.characters
  }
  return characterStore.characters.filter(character =>
    character.species.includes(selectedSpecies.value),
  )
})

/**
 * Étape 2 : Filtrer par recherche
 * Utilise filteredBySpecies comme source (chaînage)
 * La recherche est insensible à la casse (toLowerCase)
 */
const filteredBySearch = computed(() => {
  if (!searchQuery.value) {
    return filteredBySpecies.value
  }
  const query = searchQuery.value.toLowerCase()
  return filteredBySpecies.value.filter(character =>
    character.name.toLowerCase().includes(query),
  )
})

/**
 * Étape 3 : Trier par nom
 * [...] crée une copie pour ne pas modifier le tableau filtré
 * localeCompare('fr') gère les accents français
 */
const sortedCharacters = computed(() => {
  // TODO : le linter me conseille d'utiliser toSorted() au lieu de sort() -> poser la question au prof
  return [...filteredBySearch.value].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name, 'fr')
    return sortOrder.value === 'asc' ? comparison : -comparison
  })
})

/**
 * Inverse l'ordre de tri entre ascendant et descendant
 */
function toggleSort() {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}
</script>

