<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup>
// Imports des composants de layout
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useCharacterStore } from '@/stores/characterStore.js'

// Initialisation du store au montage de l'application
// onMounted est auto-importé grâce à unplugin-auto-import
onMounted(async () => {
  const characterStore = useCharacterStore()
  // init() charge les Personnages et les sortilèges en parallèles
  await characterStore.init()
})

</script>
