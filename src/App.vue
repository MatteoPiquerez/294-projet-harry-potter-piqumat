<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view />
    </v-main>
    <!-- La snackbar d'information pour nous avertir de l'ajout au du retrait des favoris -->
    <v-snackbar
      v-model="snackbarStore.show"
      :color="snackbarStore.color"
      :timeout="2000"
    >
      {{ snackbarStore.message }}
    </v-snackbar>
    <app-footer />
  </v-app>
</template>

<script setup>
// Imports des composants de layout
  import AppFooter from '@/components/AppFooter.vue'
  import AppHeader from '@/components/AppHeader.vue'
  import { useCharacterStore } from '@/stores/characterStore.js'
  import { useSnackbarStore } from '@/stores/snackbarStore'
  const snackbarStore = useSnackbarStore()

  // Initialisation du store au montage de l'application
  // onMounted est auto-importé grâce à unplugin-auto-import
  onMounted(async () => {
    const characterStore = useCharacterStore()
    // init() charge les Personnages et les sortilèges en parallèles
    await characterStore.init()
  })

</script>
