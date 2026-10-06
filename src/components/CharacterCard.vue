<template>
  <v-card hover :to="`/character/${character.id}`">
    <v-img
      :alt="character.name"
      cover
      height="200"
      :src="getImageUrl(character.img)"
    />
    <v-card-title>{{ character.name }}</v-card-title>
    <v-card-subtitle>Maison {{ character.house }}</v-card-subtitle>
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
