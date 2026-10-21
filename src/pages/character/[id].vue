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
      class="mx-auto"
      max-width="800"
    >
      <v-img
        :alt="character.name"
        cover
        height="300"
        :src="getImageUrl(character.img)"
      />

      <v-card-title class="text-h4">
        {{ character.name }}
      </v-card-title>

      <v-card-subtitle>
        Maison {{ character.house }}
      </v-card-subtitle>

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
    return characterStore.characters[route.params.id]
    //return characterStore.getCharacterById(route.params.id)
  })
  console.log(character)
</script>
