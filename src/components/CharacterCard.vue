<template>
  <v-card hover :to="`/character/${character.id}`">
    <v-img
      :alt="character.name"
      cover
      height="200"
      :src="getImageUrl(character.image)"
    />
    <v-card-title>{{ character.name }}</v-card-title>
    <v-card-subtitle>Maison {{ character.house }}</v-card-subtitle>
    <v-card-actions>
      <v-spacer />
      <v-btn
        :class="{ 'favorite-active': characterStore.isFavorite(character) }"
        :color="characterStore.isFavorite(character) ? 'red' : ''"
        :icon="characterStore.isFavorite(character) ? 'mdi-heart' : 'mdi-heart-outline'"
        variant="text"
        @click.stop.prevent="handleToggleFavorite()"
      />
    </v-card-actions>
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

  defineProps({
    character: {
      type: Object,
      required: true,
    },
  })

  const characterStore = useCharacterStore()
  const showSnackbar = ref(false)
  const snackbarMessage = ref('')

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
</style>
