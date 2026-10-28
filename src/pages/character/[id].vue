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
        Information sur le personnage
      </v-card-subtitle>

      <v-list>
        <v-list-item
          v-for="(cle, c) in cles"
          :key="c"
          class="list-item"
        >
          <span class="cle">{{ cleTransforme(cle) }} : </span>
          <span class="valeur">{{ getValeurAafficher(character[cle]) }}</span>
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

  // sépare les clés avec plusieurs mots collés (alternativeName par ex.) grâce à la majuscule de chaque mot
  // puis concate les mots du tableau en seule String avec un espace au milieu et transforme le tout en majuscule
  const cleTransforme = cle => cle.split(/(?=[A-Z])/).join(' ').toUpperCase()

  /**
   * Retourne la valeur à afficher pour chaque key du personnage
   * si la valeur et un tableau, on va retourner une seule chaîne.
   * @param valeur la valeur correspondant à la clé.
   * @return {*|string} La valeur en seule chaîne.
   */
  function getValeurAafficher (valeur) {
    if (valeur === null || valeur === undefined) return ''
    if (Array.isArray(valeur)) {
      let list = ''
      for (let i = 0; i < valeur.length; i++) {
        if (i !== 0) {
          list += ', '
        }
        list += `"${valeur[i]}"`
      }
      return list
    }
    return valeur
  }

</script>

<style scoped>

/* ysabeau-700italic - latin */
@font-face {
  font-display: swap;
  font-family: 'Ysabeau';
  font-style: italic;
  font-weight: 700;
  src: url('@/assets/fonts/ysabeau-v5-latin-700italic.woff2') format('woff2');
}

.card {
  padding: 10% 10% 2%;
}

.list-item {
  margin: 5px 0;
  letter-spacing: 1.5px;
}

.list-item:hover {
  background-color: darkgray;
}

.valeur {
  font-family: 'Ysabeau';
  color: goldenrod;
}

</style>
