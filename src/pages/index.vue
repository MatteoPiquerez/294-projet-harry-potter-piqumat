<template>
  <v-container>
    <h1 class="text-h3 text-center my-6">HarryPotterDex</h1>

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

    <!-- Message d'erreur si aucun Pokémon chargé -->
    <v-alert
      v-else-if="characterStore.characters.length === 0"
      class="mb-6"
      type="error"
      variant="tonal"
    >
      Impossible de charger les Personnage. Vérifiez que l'API tourne sur
      {{ apiUrl }}.
    </v-alert>

    <!-- Grille de cartes (cas normal) -->
    <v-row v-else>
      <v-col
        v-for="character in characters.data"
        :key="character.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <character-card :character="character" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  // Import du store et de storeToRefs
  import { storeToRefs } from 'pinia'
  import CharacterCard from '@/components/CharacterCard.vue'
  import { useCharacterStore } from '@/stores/characterStore.js'

  // URL de l'API pour le message d'erreur
  const apiUrl = import.meta.env.VITE_API_URL || 'https://apis.divtec.me/api/harrypotter'

  // Instancier le store
  const characterStore = useCharacterStore()

  // Destructurer le state en gardant la réactivité
  // storeToRefs convertit chaque propriété du state en ref
  const { characters } = storeToRefs(characterStore)
  console.log(characters[1])
</script>
