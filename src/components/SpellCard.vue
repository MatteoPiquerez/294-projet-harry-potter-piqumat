<template>
  <v-card class="h-100" hover>
    <v-card-title class="text-wrap">{{ spell.name }}</v-card-title>
    <v-card-text>Description : {{ spell.description }}</v-card-text>
  </v-card>
</template>

<script setup>

  const { spell } = defineProps({
    spell: {
      type: Object,
      required: true,
    },
  })
</script>
