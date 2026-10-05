<template>
  <v-container>
    <h1 class="text-h3 text-center my-6">
      Test API
    </h1>

    <v-row>
      <ul>
        <li
          v-for="personnage in personnageHP"
          :key="personnage.id"
        >
          {{ personnage.name }}
        </li>
      </ul>
    </v-row>
  </v-container>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'

const personnageHP = ref([])

onMounted(async () => {
  const response = await fetch('https://apis.divtec.me/api/harrypotter/characters')
  const json = await response.json()
  personnageHP.value = json.data
})
</script>
