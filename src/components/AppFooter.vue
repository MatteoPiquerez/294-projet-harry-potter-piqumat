<template>
  <!-- Footer de l'application avec la date et le titre -->
  <v-footer>
    <div class="px-4 text-center w-100">
      <slot>{{ new Date().getFullYear() }} - HarryPotterDex</slot>
    </div>
  </v-footer>
</template>
