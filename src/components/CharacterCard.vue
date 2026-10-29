<template>
  <!--
  Carte générer pour chaque personnage avec son image et son espèce
  La carte est cliquable et redirige vers la vue détaillé du personnage
  -->
  <v-card class="v-card" hover :to="`/character/${character.id}`">
    <v-img
      :alt="character.name"
      class="mx-auto"
      cover
      height="auto"
      :src="getImageUrl(character.image)"
      width="220"
    />
    <v-card-title>{{ character.name }}</v-card-title>
    <v-card-subtitle>{{ character.species }}</v-card-subtitle>

    <v-card-actions>
      <v-spacer />

      <!-- Le bouton coeur pour ajouter ou retirer le personnage des favoris   -->
      <v-btn
        :class="{ 'favorite-active': characterStore.isFavorite(character) }"
        :color="characterStore.isFavorite(character) ? 'red' : ''"
        :icon="characterStore.isFavorite(character) ? 'mdi-heart' : 'mdi-heart-outline'"
        variant="text"
        @click.stop.prevent="handleToggleFavorite()"
      />
    </v-card-actions>

    <!-- La snackbar d'information pour nous avertir de l'ajout au du retrait des favoris -->
    <v-snackbar
      v-model="showSnackbar"
      color="primary"
      :timeout="2000"
    >
      {{ snackbarMessage }}
    </v-snackbar>
  </v-card>
</template>

<script setup>
  import { useCharacterStore } from '@/stores/characterStore.js'
  import { getImageUrl } from '@/utils/imageUrl'

  const { character } = defineProps({
    character: {
      type: Object,
      required: true,
    },
  })

  const characterStore = useCharacterStore()
  const showSnackbar = ref(false)
  const snackbarMessage = ref('')

  /**
   * Fonction qui va ajouter le personnage des favoris s'il n'y était pas
   * et le retirer s'il y était déjà.
   * Ensuite déterminer le message qui sera afficher dans la snackbar,
   * et afficher la snackbar.
   */
  function handleToggleFavorite () {
    const wasFavorite = characterStore.isFavorite(character)
    characterStore.toggleFavorite(character)
    snackbarMessage.value = wasFavorite ? 'Retiré des favoris' : 'Ajouté aux favoris'
    showSnackbar.value = true
  }
</script>

<style scoped>
.favorite-active {
  animation: heartbeat 0.6s ease-in-out;
}

.v-card {
  padding: 15% 0 0;
}
</style>
