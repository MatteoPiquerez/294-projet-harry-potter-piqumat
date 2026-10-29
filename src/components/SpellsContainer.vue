<template>
  <v-container>
    <h1 class="text-h3 text-center my-6"></h1>

    <v-row class="mb-4">
      <!--
      Champ de recherche par nom
        * v-model lie la valeur au ref searchQuery
        * clearable ajoute un bouton pour vider le champ
      -->
      <v-col cols="12" md="4" sm="6">
        <v-text-field
          v-model="searchQuery"
          clearable
          density="compact"
          hide-details
          label="Rechercher un sortilège"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
        />
      </v-col>
    </v-row>

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
        v-for="spell in filteredBySearch"
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
  import { storeToRefs } from 'pinia'
  import { useCharacterStore } from '@/stores/characterStore.js'

  // URL de l'API pour le message d'erreur
  const apiUrl = import.meta.env.VITE_API_URL || 'https://apis.divtec.me/'

  // Instancier le store
  const characterStore = useCharacterStore()

  // Destructurer le state en gardant la réactivité
  // storeToRefs convertit chaque propriété du state en ref
  const { spells } = storeToRefs(characterStore)

  /**
   * Variables réactives pour la recherche
   * ref() est auto-importé grâce à unplugin-auto-import
   */
  const searchQuery = ref('')

  /**
   * Filtrer par recherche
   * Utilise spells (du store) comme source
   * La recherche est insensible à la casse (toLowerCase)
   */
  const filteredBySearch = computed(() => {
    if (!searchQuery.value) {
      return spells.value
    }
    const query = searchQuery.value.toLowerCase()
    return spells.value.filter(spell =>
      spell.name.toLowerCase().includes(query),
    )
  })

</script>
