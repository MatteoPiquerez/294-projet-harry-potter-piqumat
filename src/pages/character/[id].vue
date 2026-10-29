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

    <!-- affiche un message d'erreur si le personnage n'est pas trouvé -->
    <v-alert
      v-if="!character"
      type="error"
      variant="tonal"
    >
      Personnage non trouvé.
    </v-alert>

    <!-- Carte contenant toutes les informations sur le personnage -->
    <v-card
      v-else
      class="mx-auto card"
      max-width="800"
    >
      <v-img
        :alt="character.name"
        cover
        height="auto"
        :src="getImageUrl(character.image)"
        width="1000"
      />

      <v-card-title class="text-h4">
        {{ character.name }}
      </v-card-title>

      <v-card-subtitle>
        Information sur le personnage
      </v-card-subtitle>

      <!-- boucle sur tous les propriété du personnage et affiche leur valeur -->
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
    </v-card>
  </v-container>
</template>

<script setup>
  // Import du store Pokémon
  import { useCharacterStore } from '@/stores/characterStore'
  import { getImageUrl } from '@/utils/imageUrl'

  // Récupérer l'ID depuis les paramètres de la route
  // TODO : est ce que ça récupère vraiment l'ID ?
  const route = useRoute()

  // Instancier le store
  const characterStore = useCharacterStore()

  // Utiliser le getter du store pour trouver le Personnage
  // computed se met à jour automatiquement si l'ID change
  const character = computed(() => {
    return characterStore.getCharacterById(route.params.id)
  })

  // créer un tableau avec toutes les propriétés de chaque personnage
  // (tous les personnages n'ont pas forcément les mêmes propriétés)
  // Les id, les images et les noms des personnages ne sont pas affichés
  const cles = []
  for (const cle in character.value) {
    if (cle === 'id' || cle === 'image' || cle === 'name') {
      continue
    }
    cles.push(cle)
  }

  // sépare les clés avec plusieurs mots collés (alternativeName par ex.) grâce à la majuscule de chaque mot
  // puis concate les mots du tableau en seule String avec un espace au milieu et transforme le tout en majuscule
  // Cela permet un affichage plus propres
  const cleTransforme = cle => cle.split(/(?=[A-Z])/).join(' ').toUpperCase()

  /**
   * Retourne la valeur à afficher pour chaque key du personnage
   * si la valeur et un tableau, on va retourner une seule chaîne.
   * @param valeur la valeur correspondant à la clé.
   * @return {*|string} La valeur en seule chaîne.
   */
  function getValeurAafficher (valeur) {
    // TODO : je pense que je peux améliorer cette fonction
    if (valeur === null || valeur === undefined) return ''
    if (Array.isArray(valeur)) {
      let list = ''
      for (let i = 0; i < valeur.length; i++) {
        if (i !== 0) {
          list += ', '
        }
        // chaque élément de la liste est entouré de guillemet (volontaire).
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
  background-color: midnightblue;
}

.valeur {
  font-family: 'Ysabeau';
  color: goldenrod;
}

</style>
