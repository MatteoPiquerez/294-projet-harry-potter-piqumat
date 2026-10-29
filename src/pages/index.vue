<template>

  <!-- Page d'accueil du site -->
  <v-container>
    <h1 class="text-h3 text-center my-6">HarryPotterDex</h1>

    <!-- Affiche un menu de 2 onglets pour aller soit sur les sortilèges soit les personnages -->
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

    <!--
    Contenu des 2 onglets :
    1. Le contenant des personnages (CharacterContainer)
    2. Le contenant des sortilèges (SpellsContainer)
    -->
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
  import SpellsContainer from '@/components/SpellsContainer.vue'

  const tab = ref('personnages')
</script>
