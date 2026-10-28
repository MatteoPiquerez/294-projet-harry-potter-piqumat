<template>
  <v-container>
    <v-btn
      class="mb-4"
      prepend-icon="mdi-arrow-left"
      variant="text"
      @click="$router.back()"
    >
      Retour
    </v-btn>

    <v-alert
      v-if="!character"
      type="error"
      variant="tonal"
    >
      Personnage non trouvé.
    </v-alert>

    <v-card
      v-else
      class="mx-auto card"
      max-width="800"
    >
      <v-img
        :alt="character.name"
        cover
        height="300"
        :src="getImageUrl(character.image)"
      />
      <v-card-title class="text-h4">
        {{ character.name }}
      </v-card-title>

      <v-card-subtitle>
        Maison {{ character.house }}
      </v-card-subtitle>

      <v-list>
        <v-list-item
          v-for="(cle, c) in cles"
          :key="c"
          class="list-item"
        >
          {{ cle }} : {{ character[cle] }}
        </v-list-item>
      </v-list>

      <v-card-text>
        <p v-if="character.description" class="text-body-1 mb-4">
          {{ character.description }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  // Import du store Pokémon
  import { useCharacterStore } from '@/stores/characterStore'
  import { getImageUrl } from '@/utils/imageUrl'

  // Récupérer l'ID depuis les paramètres de la route
  const route = useRoute()

  // Instancier le store
  const characterStore = useCharacterStore()

  // Utiliser le getter du store pour trouver le Personnage
  // computed se met à jour automatiquement si l'ID change
  const character = computed(() => {
    return characterStore.getCharacterById(route.params.id)
  })

  // créer un tableau avec toutes les propriétés de chaque objet
  // (chaque objet n'a pas forcément les mêmes propriétés)
  const cles = []
  for (const cle in character.value) {
    if (cle === 'id' || cle === 'image' || cle === 'name') {
      continue
    }
    cles.push(cle)
  }

</script>

<style scoped>
.card {
  padding: 10% 10% 2%;
}

.list-item {
  margin: 5px 0;

}

.list-item:hover {
  background-color: darkgray;
  border-radius: 15px;
}

</style>
