<template>
  <v-container>
    <h1 class="text-h3 text-center my-6">
      Mes favoris ({{ characterStore.totalFavorites }})
    </h1>

    <!-- Message si aucun favori -->
    <v-alert
      v-if="characterStore.totalFavorites === 0"
      class="mb-6"
      type="info"
      variant="tonal"
    >
      Vous n'avez pas encore de Personnages favoris.
      Cliquez sur le coeur d'un Personnage pour l'ajouter !
    </v-alert>

    <!-- Grille de cartes Personnages favoris -->
    <v-row v-else>
      <v-col
        v-for="character in characterStore.getFavorites"
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
  import CharacterCard from '@/components/CharacterCard.vue'
  import { useCharacterStore } from '@/stores/characterStore.js'

  const characterStore = useCharacterStore()
</script>
