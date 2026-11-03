Questions à poser au prof : 
- pourquoi quand je retire les personnages des favoris depuis la page favoris il n'y a pas la snackbar. Le prof cherche
- est-ce que il doit forcément y avoir des emits qqelque par : Non 
- à quelle point la doc doit être devoloper (ex Environnement de développement)
- Je doit mettre quoi dans la section méthodologie, et Test technique ?

à faire semaine pro :
- passer default_user dans assets 
- aller voir l'exemple de documentation que j'ai mis en favoris dans firefox
- demander à claude code les améliorations que je peux faire (checker s'il y a encore des pokémon)
- rédiger la documentation de manière détaillée (je peux adapter la doc si besoin)
- essayer de mettre un autre composant que les v-card pour les sortilèges (vu que elle ne sont pas cliquable)
- essayer de rajouter des animations css
- checker les todo

Optionnel : 
- essayer de faire un bouton qui change la couleur du theme (vuetify.js)  
- rendre le titre responsive 




 


site visité : 

gimp pour modifier les images (aller rechercher les images )

pour les polices : https://gwfh.mranftl.com/fonts
pour séparer les key de mes character (alternativeName par exemple ) : https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters
trouver les icons mdi : https://pictogrammers.com/library/mdi/
tester si une valeur est un tableau : https://stackoverflow.com/questions/767486/how-do-i-check-if-a-variable-is-an-array-in-javascript
menu de navigation entre personnages et sortilège : https://vuetifyjs.com/en/components/tabs/#usage
pour tous les composant vue et leur documentation : https://v2.vuetifyjs.com





ia 
Claude Code v2.1.246
Opus 5 

à corriger la fonction dans imageUrl.js pour que ça appelle l'image dans public/
voilà le bout de code exact qu'il a fait 
```js
export function getImageUrl (filename, fallback = '/default_user_image.png') {
    if (!filename) {
        return fallback
    }
    return `${import.meta.env.VITE_API_URL}/${filename}`
}
```

à modifier la carte des sortilèges pour lui ajouter des classes car il y avait des débordement 
de texte et les card sortant du cardre 
code exact généré : 
```vue
  <v-card class="h-100" hover>
    <v-card-title class="text-wrap">{{ spell.name }}</v-card-title>
    <v-card-text>Description : {{ spell.description }}</v-card-text>
  </v-card>
```



CLaude free 
Sonnet 5.5
Mon code : 
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
Amélioration de claude : 
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

mon code : 
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

amélioration de claude : 
```js
    /**
 * Liste toutes les espèces (sans doublon) des personnages.
 */
initSpecies () {
    this.species = [...new Set(this.characters.map(c => c.species))]
},
```

Mon code : 
```js
const cles = []
for (const cle in character.value) {
    if (cle === 'id' || cle === 'image' || cle === 'name') {
        continue
    }
    cles.push(cle)
}
```

Correction de claude : 
```js
const CLES_EXCLUES = new Set(['id', 'image', 'name'])
const cles = computed(() =>
    Object.keys(character.value)
        .filter(cle => !CLES_EXCLUES.has(cle)),
)
```

# 🌐 Mon Projet Vue.js & Vuetify

## 1. 🎨 Présentation du projet

### Concept
- API choisie et pourquoi
- Public cible
- Objectifs de l’application

### Fonctionnalités principales
- Affichage d’une liste d’éléments (via API)
- Recherche / Tri / Filtres
- Vue détail
- Fonctionnalité interactive (favoris, watchlist, paramètres…)
- Persistance locale (favoris ou préférences)

### Aperçu visuel
_(Capture d’écran de l’application)_  
`![Screenshot de l’application](img/screenshot.png)`

---

## 2. 📚 Parcours d'apprentissage

### Ressources utilisées
#### Documentation & tutos
- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vuetify Docs](https://vuetifyjs.com/en/components/all/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Public APIs List](https://github.com/public-apis/public-apis)
- Autres ressources...

#### Progression
- Semaine 1 : ...
- Semaine 2 : ...
- Semaine 3 : ...
- Semaine 4 : ...
- ...

---

## 3. 🛠️ Outils et méthodologie

### Environnement de développement
- **IDE** : VS Code / WebStorm / Autre
- **Versioning** : Git + GitHub
- **Dépendances principales** : Vue 3, Vuetify 3, Pinia, Axios/Fetch
- **Gestion API Keys** : `.env` + `.env.example`

### Installation & Run
- Cloner le repo :...
- Installer :...
- Lancer :...
- Variables d’environnement : copier `.env.example` → `.env` et compléter les clés nécessaires

### Méthodologie
- Découpage en composants réutilisables
- Props & Emits clairs
- Store global avec Pinia
- Commits réguliers et explicites
- Tests manuels (UI, persistance, erreurs API)
- ...

### Choix techniques
- API sélectionnée :
- Justification du choix :
- Endpoints utilisés :
- Limites/quotas connus :

### Architecture (Descriptif + schéma simple + data-flow)
- `App.vue` : layout principal
- `views/` : pages (liste, détail, favoris)
- ...
  Outils utiles : Figma / Draw.io / ...

**Data-flow résumé :**
- Vue déclenche un **event utilisateur** → composant appelle une fonction du **store** → ...

---

## 4. 🧪 Tests et validation

### Tests techniques
- ✅ Appels API fonctionnels
- ✅ Persistance vérifiée après refresh (localStorage)
- ✅ Navigation entre les vues OK
- ...

### Tests d’UX
- Navigation intuitive
- Recherche/filtre/tri faciles à comprendre
- Feedback utilisateur (loading, erreurs, vide)
- ...

### Tests d’accessibilité
- Contraste couleurs (Vuetify par défaut)
- Labels et placeholders corrects
- Navigation clavier possible
- Focus visible
- ...

### Tests d’erreurs & fallback
- API down → **mock fallback** affiché (fichier local ou données simulées)
- Liste vide → message clair affiché
- Recherche sans résultat → affichage “Aucun élément trouvé”
- ...

---

## 5. 🤖 Usage d’intelligence artificielle

**⚠️ TRANSPARENCE OBLIGATOIRE** : Si vous utilisez une IA, vous DEVEZ :

### IA utilisée
- **Nom** : ChatGPT / Claude / GitHub Copilot / Autre
- **Version** : _(ex. GPT-4)_
- **Contexte** : Aide ponctuelle / Génération de code / Debugging

### Utilisation détaillée
**Domaines d'aide :**
- Aide au code général : X%
- Génération de snippets Vue/Vuetify : X%
- Aide à la structuration du projet : X%
- Debugging : X%
- Recherche d’idées : X%

**Compréhension et adaptation**
- Expliquer ce que fait le code généré
- Dire comment il a été adapté au projet

### Parties codées manuellement
- Composants principaux : X% personnel
- Store & persistance : X% personnel
- Routing & navigation : X% personnel
- Tests & validation : 100% personnel

### Apprentissage personnel
- Ce que j’ai appris grâce à l’IA
- Comment elle m’a aidé à progresser

---

## 6. 🎯 Bilan personnel

### Ce que j’ai appris
- Compétences techniques acquises
- Découvertes surprenantes
- Concepts difficiles maîtrisés

### Difficultés rencontrées
- Problèmes techniques et solutions trouvées
- Moments de blocage et dépassement
- Aide reçue et sources

### Réussites et fiertés
- Aspects du projet dont je suis fier
- Progrès constatés depuis le début
- Envies de développement futur

### Améliorations possibles
- Ce que j’ajouterais avec plus de temps
- Fonctionnalités bonus envisagées
- Compétences à approfondir

---

## 7. 📚 Références & Sources
- Documentation de l’API : [Nom de l’API](https://...)
- Tutos clés utilisés : ...
- Usage de l’IA : voir section ci-dessus
- Autres ressources utiles : ...
