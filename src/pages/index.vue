<template>
  <v-container>
    <h1 class="text-h3 text-center my-6">HarryPotterDex</h1>
    <v-tabs v-model="tab" grow>
      <v-tab value="personnages">
        <v-icon icon="mdi-account-outline" />
        &nbsp; Personnages
      </v-tab>
      <v-tab value="sortileges">
        <v-icon icon="mdi-creation-outline" />
        &nbsp; Sortilèges
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="personnages">
        <character-container />
      </v-tabs-window-item>
      <v-tabs-window-item value="sortileges">
        <spells-container />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>

<script setup>
  import CharacterContainer from '@/components/CharacterContainer.vue'

  const tab = ref('personnages')
</script>
