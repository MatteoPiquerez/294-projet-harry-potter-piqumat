<template>
  <v-card :to="`/pokemon/${character.id}`" hover>
    <v-img
      :src="getImageUrl(character.img)"
      :alt="character.name"
      height="200"
      cover
    />
    <v-card-title>{{ character.name }}</v-card-title>
    <v-card-subtitle>Niveau {{ character.level }}</v-card-subtitle>
  </v-card>
</template>

<script setup>
import { getImageUrl } from '@/utils/imageUrl'

defineProps({
  character: {
    type: Object,
    required: true,
  },
})
</script>
