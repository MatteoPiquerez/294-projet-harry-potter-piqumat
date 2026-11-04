# Harry Potter Dex (Projet Vue.js & Vuetify)

## 1. Présentation du projet

### Concept
J'ai choisi une API Harry Potter car je suis un grand fan de cette saga. 
Le public cible peut être soit des dévelopeurs juniors qui pourrait utiliser ce projet comme exemple, comme exercice 
ou comme template pour d'autre projet.
Ou alors des fans d'Harry Potter pourrait simplement l'utiliser pour se documenter sur les personnages et/ou les 
sortilèges de la saga. 
L'objectif technique de l'application est de faire un code propre pour que l'application puisse ensuite grandir et évoluer 
facilement, pour que des fonctionnalitées puissent être rajouté.
L'objectif fonctionnel est que l'application soit une mini-encyclopédie très intuitive pour que n'importe qui puissez
trouver des informations très simplement. 


### Fonctionnalités principales
- Affichage d’une liste de plein de personnage de la saga Harry Potter (via API)
- Affichage d'une liste de sortilège de la saga (via API également)
- Recherche / Filtres : des fonctions de recherche sur les personnages et les sortilège sont disponible 
pour filtrer les recherches de manière pertinente. 
- Pour les personnages, on peut rechercher via : 
  - le nom/prénom
  - l'espèce 
- Pour les espèces, on peut uniquement rechercher par le nom.
- Tri : 
  - L'onglet Personnage possède un bouton pour alterner entre le tri par ordre alphabétique et l'ordre inverse.
  - Pour l'onglet des sortilèges, il n'y a pas cette option. car les sorts sont déjà triés par ordre alphabétique.
- Vue détail : en cliquant sur un personnage cela ouvre une carte avec des informations détaillé sur le personnage. Elle comprend : 
  - Couleur des yeux 
  - acteur 
  - espèce 
  - surnom 
  - maison 
  - année de naissance 
  - ...

> A noter que tous les personnages ne possède pas tous les mêmes informations

- Les sortilèges n'ont pas de vue détaillée, car il y a trop peu d'information à présenter
- Fonctionnalité interactive des favoris : on peut ajouter des personnages à une liste de favoris pour les retrouver plus tard
- Persistance locale des favoris. Les favoris vont être stockés dans le localStorage du navigateur pour que la liste des
favoris soit directement initialisé à l'ouverture de la page dans le navigateur.

### Aperçu visuel
// TODO : à faire 
_(Capture d’écran de l’application)_  
`![Screenshot de l’application](img/screenshot.png)`

---

## 2. Parcours d'apprentissage

### Ressources utilisées

#### Documentation & tutos

- [Police d'écriture](https://gwfh.mranftl.com/fonts)
- [Séparer des mots à chaque majuscule ([id].vue:cleTransforme)](https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters)
- [Tester si une valeur est un tableau ([id].vue:getValeurAafficher)](https://stackoverflow.com/questions/767486/how-do-i-check-if-a-variable-is-an-array-in-javascript)
- [Trouver des icons mdi (Notamment celui des reliques de la mort)](https://pictogrammers.com/library/mdi/)
- [Menu de navigation entre personnages et sortilège](https://vuetifyjs.com/en/components/tabs/#usage)
- [Pour les composants Vue de manière général](https://v2.vuetifyjs.com)
- [Pour les composants Vue de manière général 2](https://vuetifyjs.com/en/components/all/)
- [Pinia Docs](https://pinia.vuejs.org/)

**Autre Ressource :**
- Gimp : pour la retouche de l'icon du menu principal (logo de poudlard)
- [Générateur de favicon à partir d'une image](https://favicon.io/)

#### Progression

##### 22 Septembre : 
- Création du projet, commit initial 

##### 5 Octobre : 
- Création des composants AppFooter et AppHeader
- Installation d'Axios et de Pinia dans le projet
- Création de .env et .env.example
- création de CharacterCard qui affiche la carte des personnages 
- Création de \[id].vue pour la vue en détaille des personnages
- Ajout de la page 404 par défaut 
- Ajout de la page "a propos"
- Ajout de l'initialisation automatique du store dans App.vue 
- Débogage : je récupérais les personnages, mais je n'arrivais pas à y avoir accès. 

##### 6 Octobre : 
- fix de toutes les recommandations du linter 
- ajoute de README_EXAMPLE.md dans lequel j'ai copié le README de base. 
Cela me permettra d'avoir toujours un exemple de la structure de base demandé pour la documentation.
- Intégration des Vue devtool au projet (je n'ai pas utilisé l'extension de navigateur)
- Résolution de l'erreur qui faisait que je ne pouvais pas obtenir les personnages du store. 
- Résolution de l'erreur qui faisait que je ne pouvais pas passer un personnage en props. 

##### 21 Octobre :
- Fix de l'erreur du getter du store qui doit retourner un personnage via son ID.
Il ne le trouvait pas le personnage car il comparait une chaîne de caractères avec un nombre 

##### 22 Octobre : 
- Suppression de plusieurs fichiers inutilisés (HelloWorld par ex)
- Début de la redaction de la documentation
- Correction de l'erreur qui fait que les images ne s'affichait pas : il fallait changer l'URL de base qui était faux.
- Intégration d'une fonction de recherche par nom ou par espèces. 
- Intégration d'une fonction de tri par ordre alphabétique ou l'inverse. 

##### 27 Octobre : 
- Implémentation de la gestion des favoris dans le store Pinia 
- Correction finale de getter du store qui faisait une comparaison de type invalide 
- Implémentation de l'affichage des favoris 

##### 28 Octobre : 
- Modification de la vue détaillée des personnages pour que chaque personnage affiche les propriétés qu'il possède.
- Ajout de style sur la carte des personnages.
- Ajout d'une image d'avatar par défaut pour les personnages qui ne possède pas d'image.
- Ajout de deux onglets de navigation un pour les personnages l'autre pour les sortilèges dans index.vue.

##### 29 Octobre : 
- Modification pour rendre les onglets mieux répartit et plus ergonomique 
- Nettoyage du code
- Implémentation d'une fonction de recherche pour les sortilèges 
- Optimisation de la taille des images dans CharacterCard.vue et dans \[id].vue
- Review de tout le code, mise des commentaires, petites corrections et amélioration.
- ajout des favicons pour le site.

##### 30 Octobre : 
- implémentation de `toSorted()` au lieu de `sort()` sur une copie du tableau 
- Ajout d'une méthode initSpecies() qui va boucler sur chaque personnage et 
ajouter leurs espèces à la liste (si elle n'y est pas encore)

##### 2 Novembre : 
- Affichage d'un message d'erreur propre si aucun sortilège ou personnage n'est trouvé par la fonction de recherche.
- Suite de la rédaction de la documentation
- Amélioration de plusieurs fonctions grâce à claude code

##### 3 Novembre : 
- ajouter rewrite SPA pour Vercel pour rediriger chaque rechargement de page sur index.html 
- Correction mineur et amélioration de plusieurs fonctions avec claude
- suite de la documentation

---

## 3. Outils et méthodologie

### Environnement de développement
- **IDE** : WebStorm 
- **Versioning** : Git + GitHub
- **Dépendances principales** : Vue 3, Vuetify 3, Pinia, Axios
- **Gestion API Keys** : `.env` + `.env.example`

### Installation & Run
- Cloner le repo : `git clone https://github.com/MatteoPiquerez/294-projet-harry-potter-piqumat.git`
- Installer : `npm install` (install toutes les dépendances)
- Variables d’environnement : copier `.env.example` → `.env` et compléter les clés nécessaires 
- Lancer : `npm run dev` (Les variables d'environnement doivent être définit pour que le projet puisse être lancé)

### Méthodologie
// TODO : poser la question 
- Découpage en composants réutilisables 
- Props & Emits clairs
- Store global avec Pinia
- Commits réguliers et explicites
- Tests manuels (UI, persistance, erreurs API)
- ...

### Choix techniques
- API sélectionnée : https://apis.divtec.me
- Justification du choix : La Divtec a récupéré toutes les données d'une API Harry Potter connu pour ensuite les reproposer.
Cela permet d'éviter certaine limitation (quotas, token )
- Endpoints utilisés :  
  - GET https://apis.divtec.me/api/harrypotter/characters pour les personnages 
  - GET https://apis.divtec.me/api/harrypotter/spells pour les sortilèges
- Limites/quotas connus : La limite d'objet retournée en une fois est 20, 
on peut augmenter cette limite à 100 grâce à _?limit=100_ à la fin de l'url
- Les des endpoints contiennent plusieurs pages, 
on peut donc récupérer plusieurs fois 100 objets (autant de fois qu'il y a de page).
- La pagination n'est pas utilisé dans mon application. 
J'estimais avoir assez de donnée avec cent objets pour chaque endpoint
- Il n'y a par contre pas de quota (par heure par ex).

### Architecture (Descriptif + schéma simple + data-flow)
// TODO 
- `App.vue` : layout principal  
- `views/` : pages (liste, détail, favoris)  
- ...
Outils utiles : Figma / Draw.io / ...

**Data-flow résumé :**  
- Vue déclenche un **event utilisateur** → composant appelle une fonction du **store** → ...

---

## 4. Tests et validation

### Tests techniques
- Le store fonctionne, les données sont récupérées correctement grâce à l'API 
- La mise en favoris fonctionne, le personnage est ajouté au localStorage et dans la liste des Favoris du store.
- On peut recharger une page lorsqu'on est sur une route Vue. Le chemin est directement recalculé.
- Lorsqu'un filtre est ajouté/retiré des recherches, les données sont directement recalculé grâce au Computed.
- L'affichage de la vue détaillé d'un personnage grâce à son ID fonctionne.
- Le routage entre chaque page fonctionne. 
- L'avatar par défaut s'affiche correctement si le personnage ne possède pas d'image
- La vue détaillée d'un personnage affiche tous les attributs que possède le personnage
- L'ajout et la suppression d'un favori affiche bien une snackbar avec un message.
- On traite les 3 états de l'appel API 
- On affiche un message clair si aucun résultat n'est trouvé suite à une recherche
- Chaque personnage et sortilège est correctement passé en props aux _Card_

### Tests d’UX
- Un skeleton-loader s'affiche pendant que le store récupère les données 
- Une snackbar s'affiche avec un message pour informer que le personnage a été ajouté ou supprimé des favoris.
- Il y a un feedback utilisateur en cas de liste vide ou en cas de problème de chargement des données.
- A chaque que la souris se transforme en main, c'est qu'il y a un clique à effectuer.
- Chaque champ de recherche, de filtre ou de tri décrit bien ce qu'il fait et dans quel état il est.
- La page actuelle est clairement visible grâce au rond clair entourant l'icône de la page.
- Le logo du site est cliquable et ramène à la page d'acceuil 
- Il y a une animation et un changement de couleur du coeur à l'ajout ou au retrait d'un favori.
- La navigation est intuitive et respecte les standard du web.

### Tests d’accessibilité
- Contraste de couleur : tous est respecté, les couleurs majoritaires sont le noir et le blanc (très bon contraste)
Les composants Vuetify ont par défaut un très bon contraste.
- La navigation grâce à la tabulation fonctionne parfaitement, les focus se font sur chaque élément 
- Toutes les images ont des textes alternatifs décrivant l'image
- Tout est structuré dans des balises sémantiques pour faciliter la compréhension par les lecteurs d'écran.
- Chaque champ de recherche possède un placeholder et un label clair et explicite 
- Le site est responsive, rétrécissement des éléments pour une page plus petite, changement du nombre de colonnes
si la taille de l'écran change.
- Toute la navigation au clavier est fonctionnelle.
- Chaque balise est choisi pour avoir la meilleure affordance possible.

### Tests d’erreurs & fallback
- API down : affichage d'un message d'erreur demandant à l'utilisateur de vérifier que l'URL de l'api est bien joignable.
- Liste vide : S'il n'y a aucun favoris par exemple, un message va le signaler à l'utilisateur
et l'inviter à ajouter un personnage en favori  
- Recherche sans résultat : Un message informe qu'aucun résultat ne correspond à la recherche (avec un clin d'oeil à la saga)
- Si un personnage ne possède pas d'image : grâce à la fonction `getImageUrl()` 
on va lui assigner une image d'avatar par défaut

---

## 5. Usage d’intelligence artificielle

### IA utilisée

#### Copilot
- **Nom** : Microsoft Copilot
- **Version** : 2.20261020.70.0
- **Contexte** : Aide ponctuelle pour intégrer les outils de debuging Vue JS 

`package.json` : ajout de VueDevTools
```js
    "vite-plugin-vue-devtools": "^8.2.1",
```


`vite.config.mjs` : ajout du plugin VueDevTools
```js
// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    VueDevTools(),
    Layouts(),
    Vue({
      template: { transformAssetUrls },
```

#### Claude Code v2.1.246
- **Nom** : Claude Code v2.1.246
- **Version** : Opus 5
- **Contexte** : Correction de fonction et améliorations mineures.

##### getImageUrl()

**Fonction corrigé :** `getImageUrl()`
La fonction qui étais censée retourner la bonne image pour chaque personnage, ou alors l'image par défaut
si le personnage n'en possédait pas ne fonctionnait pas. 

**Version de claude :**
```js
export function getImageUrl (filename, fallback = '/default_user_image.png') {
    if (!filename) {
        return fallback
    }
    return `${import.meta.env.VITE_API_URL}/${filename}`
}
```

##### v-card 

**Correction :** Claude a ajouté des classes à la v-card pour lui donner le bon style. 
Avant cela, il y avait des textes qui débordaient et les cartes sortaient du cadre.

**Code généré :**
```vue
  <v-card class="h-100" hover>
    <v-card-title class="text-wrap">{{ spell.name }}</v-card-title>
    <v-card-text>Description : {{ spell.description }}</v-card-text>
  </v-card>
```

#### Claude free 
- **Nom** : Claude free
- **Version** : Sonnet 5.5
- **Contexte** : Amélioration de fonction.

##### getValeurAafficher()
La fonction que j'ai écrite :
```js
  function getValeurAafficher (valeur) {
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
```

Version améliorée de claude : 
```js
function getValeurAafficher(valeur) {
  if (valeur === null || valeur === undefined) return ''
  if (Array.isArray(valeur)) {
    // chaque élément de la liste est entouré de guillemets (volontaire).
    return valeur.map(v => `"${v}"`).join(', ')
  }
  return valeur
}
```

##### initSpecies()
La fonction que j'ai écrite : 
```js
initSpecies () {
    for (const character of this.characters) {
        const species = character.species
        if (!this.species.includes(species)) {
            this.species.push(species)
        }
    }
}
```

Version améliorée de claude :
```js
initSpecies () {
    this.species = [...new Set(this.characters.map(c => c.species))]
}
```

##### Génération des clé des personnages 
La fonction que j'ai écrite : 
```js
const cles = []
for (const cle in character.value) {
    if (cle === 'id' || cle === 'image' || cle === 'name') {
        continue
    }
    cles.push(cle)
}
```

Version améliorée de claude : 
```js
const CLES_EXCLUES = new Set(['id', 'image', 'name'])
const cles = computed(() =>
    Object.keys(character.value)
        .filter(cle => !CLES_EXCLUES.has(cle)),
)
```

### Utilisation détaillée
J'ai très peu utilisé l'IA. C'était un choix personnel, étant donné que le projet doit être présenté et connu en détail,
j'ai préféré privilégier une utilisation ponctuelle de l'IA et coder l'essentiel du projet moi-même. 
C'est la raison pour laquelle il y a assez peu de fonctionnalité très avancée.
Je l'ai utilisé principalement pour de l'amélioration de fonction (détaillé en dessus).

**Domaines d'aide :**
- Aide au code général : 10%
- Génération de snippets Vue/Vuetify : 5%  
- Aide à la structuration du projet : 2%
- Debugging : 2% (VueDevTools)  
- Recherche d’idées : 0%  

**Compréhension et adaptation**
Le code généré pour des fonctions n'ajoute rien en termes de fonctionnalité. 
Les fonctions que j'avais codées moi étais fonctionnelle, mais l'IA les a rendues plus propres et plus optimisées.

Les autres petits bout de code généré par IA ont été compris et/ou documenté.

Le code d'IA n'a pas dû être adapté au projet, car je fournissais toujours la fonction que j'avais codée 
moi-même pour que l'IA l'améliore. Elle avait donc déjà les bons noms de fonctions, variable, etc..
Le code était donc déjà adapté

### Parties codées manuellement
- Composants principaux : 95% personnel  
- Store & persistance : 98% personnel  
- Routing & navigation : 100% personnel  
- Tests & validation : 100% personnel  

### Apprentissage personnel
Je n'ai pas appris grand-chose grâce à l'IA sur ce projet. 
Dans ce projet, j'ai utilisé presque essentiellement les notions vu en cours et appliqué dans le pokédex Vuetify. 
Grâce à ces deux sources, j'ai pu faire pratiquement tout le projet.

Mais l'IA m'a appris et fournit plusieurs méthodes pour améliorer mon projet. 
Je pourrai donc réutiliser ces méthodes prêtes et optimisées pour de futurs projets.

---

## 6. Bilan personnel

### Ce que j’ai appris
J'ai appris énormément sur le fonctionnement général d'un framework web : 
- Les applications SPA
- Les composants 
- Les liaisons simplifié avec v-bind
- Le routage automatique pour les pages du dossier pages 
- Les données recalculées automatiquement grâce à computed. 
- Les composant déjà prêt de Vuetify 
- Les props/emits
- Les stores

J'ai découvert que l'on peut faire des grosses applications web de manière très simple sans se battre
avec pleins de fichiers html. 
J'étais toujours très impressionné en voyant de très grosses applications web en imaginant le travail que ça avait dû 
demander. Mais je me rends compte qu'avec des frameworks, c'est beaucoup plus rapide. 

Au début, je trouve que ce qui était compliqué c'étais le nombre de fichiers comparé à un projet html tout simple.
Il y avait plein plein de fichier et de dossier dont je ne savais pas l'utilité.
Et après plusieurs cours et quelques tutos, j'ai commencé à comprendre l'utilité de chaque chose.

### Difficultés rencontrées
**Je n'arrivais pas à récupérer la liste des personnages**
Le store ne m'affichais pourtant pas d'erreur. 
Le problème venait du fait que les réponses se trouvait dans un tableau _data_.
Il fallait donc faire `response.data.data` pour récupérer les personnages. 

**Je n'arrivais pas à récupérer un personnage grâce à son ID avec le getter du store**
Le getter retournait toujours null même quand on passait un ID valide.
Le problème venait du fait que le getter comparait l'id de la route (une String) 
avec l'ID du personnage (un nombre) et donc les types ne correspondaient pas -> comparaison invalide.
Pour résoudre le problème, le store convertit l'id de la route en nombre.

**Les images des personnages ne s'affichaient pas et je ne savais pas pourquoi**
L'URL de base pour les endpoints de l'application était : https://apis.divtec.me/api/harrypotter
Mais l'URL de base pour les images était : https://apis.divtec.me/images/harrypotter
Comme les deux URL ont une base différente, la fonction `getImageUrl()` tentait d'aller chercher les images 
à cette adresse : https://apis.divtec.me/api/harrypotter/images/harrypotter (URL invalide)
Pour résoudre ce problème, il a fallu changer l'URL de base et mettre : https://apis.divtec.me
Ensuite, il a également fallu changer les appels Axios du store.

**Je n'avais pas accès à ma constante Character qui était passé en props dans CharacterCard**
Quand je faisait `character.image` dans mon composant, l'image n'étais pas trouvé. 

Code de base : 
```vue
defineProps({
    character: {
        type: Object,
        required: true,
    },
})
```
Correction : 
```vue
const { character } = defineProps({
    character: {
        type: Object,
        required: true,
    },
})
```
#### Aide reçu et source 
- Je me suis beaucoup appuyé sur le Pokédex Vuetify pour les corrections.
- Les explications en cours m'ont permis de résoudre le problème de `response.data.data`
- M. Tirole m'a aidé à résoudre le problème du getter du store, et le problème de l'URL de base invalide
- Je me suis aidé du Pokédex pour résoudre le problème de la constante _Character_ passé en proprs

### Réussites et fiertés
L'aspect du projet dont je suis assez fier, c'est la propreté. 
Il y a relativement peu de code, mais il est structuré documenté et il me semble assez propre. 
Je pense que c'est important pour que le projet puisse grandir proprement et de manière structurée. 
Je suis également assez fier de l'avoir fait majoritairement sans IA, cela m'a pris beaucoup plus de temps, 
mais cela m'a permis de beaucoup mieux comprendre mon code, de mieux assimiler les notions techniques, de déjà prendre 
de l'avance sur ma défense en oral (car je connais déjà bien mon code) et également de me forcer à chercher soit par 
moi-même soit sur internet avant de demander bêtement à une IA.

Je constate également que j'ai intégré énormément de notion de Vue.js et du web de manière plus générale.
J'avais déjà fait un projet avec Vue.js au travail, mais je n'avais pas reçu de formation sur le framework. 
J'ai donc appris sur le tas et je me suis rendu compte grâce à ce cours qu'il me manquait un gros bagage technique et 
théorique sur ce framework.

Pour mes envies de développement futur, maintenant que je maitrise beaucoup mieux vue, j'ai envie de reprendre 
mon projet Vue.js au travail pour pouvoir intégrer toutes les bonnes pratiques et les concepts appris durant ce module.

### Améliorations possibles
**Fonctionnalité que j'ajouterais avec plus de temps :** 
- Une fonction qui boucle sur les pages de L'API pour récupérer encore plus de données. 
- Une fonction pour pouvoir ajouter des sorts en favoris. 
- Une fonction de battle : on choisit un personnage, on reçoit une liste de sortilèges et on doit ensuite les 
utiliser à bon escient pour attaquer l'ennemi ou parer ses sortilèges. 
- battle des maisons : on choisit un personnage d'une maison et ensuite, il y a des questions et si on répond juste cela 
nous permet de gagner des points. 

Compétences que j'aimerais approfondir : 
- En apprendre plus sur les composants Vuetify : La library est gigantesque et j'ai le sentiment de ne pas toujours 
avoir utilisé le composant le mieux adapté à ce que je voulais faire. Étant donné que les composants sont déjà stylisé, 
cela permet de gagner un temps immense. Donc une bonne connaissance des composants est un vrai plus je pense.
- Apprendre comment marche les classes des composants Vuetify, j'ai vu que sur plein de composant il y a des classes
qui sont ajoutées et je ne sais pas toujours comment elle marche et les styles qu'elle modifie. Pour ce point là aussi,
je pense que c'est un plus de maitriser ça. 

---

## 7. Références & Sources
- Documentation de l’API : [API Harry Potter](https://apis.divtec.me/api/harrypotter/docs)  
- Tutos clés utilisés : Voir les ressources de documentation (section _Documentation & tutos_) 
- Usage de l’IA : voir section ci-dessus 
// TODO : est-ce que je garde ça ? 
- Autres ressources utiles : ...
