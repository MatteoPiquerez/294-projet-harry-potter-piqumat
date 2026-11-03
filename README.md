# 🌐 Mon Projet Vue.js & Vuetify

## 1. 🎨 Présentation du projet

### Concept
J'ai choisi une API Harry Potter car je suis un grand fan de cette saga. 
Le public cible peut être soit des dévelopeur junior qui pourrait utiliser ce projet comme exemple, comme exercice 
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
  - Pour l'onglet des sortilèges ils n'y a pas cette option. car les sorts sont déjà triés par ordre alphabétique.
- Vue détail : en cliquant sur un personnage cela ouvre une carte avec des informations détaillé sur le personnage. Elle comprend : 
  - Coleur des yeux 
  - acteur 
  - espèce 
  - surnom 
  - maison 
  - année de naissance 
  - ...
> A noter que tous les personnages ne possède pas tous les mêmes informations 
- Les sortilèges n'ont pas de vue détaillé car il y a trop peu d'information à présenter
- Fonctionnalité interactive favoris : on peut ajouter des personnages à une liste de favoris pour les retrouver plus tard
- Persistance locale des favoris. Les favoris vont être stockés dans le localStorage du navigateur pour que la liste des
favoris soit directement initialisé à l'ouverture de la page dans le navigateur

### Aperçu visuel
// TODO : à faire 
_(Capture d’écran de l’application)_  
`![Screenshot de l’application](img/screenshot.png)`

---

## 2. 📚 Parcours d'apprentissage

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
- [Générateur de favicon a partir d'une image](https://favicon.io/)

#### Progression
// TODO : voir les commits pour voir la progression 
- Semaine 1 : ...
- Semaine 2 : ...
- Semaine 3 : ...
- Semaine 4 : ...
- ...

---

## 3. 🛠️ Outils et méthodologie

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
- Il n'y a pas contre pas de quota (par heure par ex)

### Architecture (Descriptif + schéma simple + data-flow)
// TODO 
- `App.vue` : layout principal  
- `views/` : pages (liste, détail, favoris)  
- ...
Outils utiles : Figma / Draw.io / ...

**Data-flow résumé :**  
- Vue déclenche un **event utilisateur** → composant appelle une fonction du **store** → ...

---

## 4. 🧪 Tests et validation
// TODO 

### Tests techniques
- Le store fonctionne, les données sont récupérer correctement grâce à l'API 
- La mise en favoris fonctionne, le personnage est ajouté au localStorage et dans la liste des Favoris du store.
- On peut recharger une page lorsqu'on est sur une route Vue. Le chemin est directement recalculé.
- Lorsqu'un filtre est ajouté/retiré des recherches, les données sont directement recalculé grâce au Computed.
- L'affichage de la vue détaillé d'un personnage grâce à son ID fonctionne.
- Le routage entre chaque page fonctionne. 
- L'avatar par défaut s'affiche correctement si le personnage ne possède pas d'image

// TODO : chercher sur DEVJs quelques trucs à ajouter (pas besoin de bcp plus)

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
// TODO 
**⚠️ TRANSPARENCE OBLIGATOIRE** : Si vous utilisez une IA, vous DEVEZ :

### IA utilisée
- **Nom** : Microsoft Copilot
- **Version** : 2.20261020.70.0
- **Contexte** : Aide ponctuelle pour intégrer les outils de debuging Vue JS 

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
J'ai appris énormément sur le fonctionnement général d'un framework web : 
- Les application SPA
- Les composants 
- les liaisons simplifié avec v-bind
- le routage automatique pour les pages du dossier pages 
- Les données recalculées automatiquement grâce à computed. 
- Les composant préfait Vuetify 

J'ai découvert que l'on peut faire des grosse applications web de manière très simple sans se battre
avec plein de fichier html. 
J'étais toujours très impressionnée en voyant de très grosses applications web en imaginant le travail que ça avait du 
demander. Mais je me rend compte qu'avec des frameworks, c'est beaucoup plus rapide. 

Au début je trouve que ce qui étais compliqué c'étais le nombre de fichier comparé à un projet html tous simple.
Il y avait plein plein de fichier et de dossier dont je ne savais pas l'utilité.
Et après plusieurs cours et quelques tuto j'ai commencé à comprendre l'utilité de chaque chose.

### Difficultés rencontrées
- Problèmes techniques et solutions trouvées  
- Moments de blocage et dépassement  
- Aide reçue et sources  

### Réussites et fiertés
- Aspects du projet dont je suis fier  
- Progrès constatés depuis le début  
- Envies de développement futur  

### Améliorations possibles
**Fonctionnalité que j'ajouterais avec plus de temps :** 
- Une fonction qui boucle sur les pages de L'API pour récupérer encore plus de données. 
- Une fonction pour pouvoir ajouter des sort en favoris. 
- Une fonction de battle : on choisi un personnage, on reçoit une liste de sortilèges et on doit ensuite les 
utiliser à bonne essient pour attaquer l'ennemi ou parer ses sortilèges. 
- battle des maisons : on choisit un personnage d'une maison et ensuite il y a des questions et si on répond juste cela 
nous permet de gagner des points. 

Compétences que j'aimerais approfondir : 
- En apprendre plus sur les composants Vuetify : La library est gigantesque et j'ai le sentiment de ne pas toujours 
avoir utiliser le composant le mieux adapté à ce que je voulais faire. Etant donnée que les composant sont déjà stylisé 
Cela permet de gagner un temps immense. Donc une bonne connaissance des composant est un vrai plus je pense.
- Apprendre comment marche les classes des composants Vuetify, j'ai vu que sur plein de composant il y a des classes
qui sont ajouté et je ne sais pas toujours comment elle marche et les styles qu'elle modifie. Pour ce point là aussi,
je pense que c'est un plus de maitriser ça. 


---

## 7. 📚 Références & Sources
- Documentation de l’API : [API Harry Potter](https://apis.divtec.me/api/harrypotter/docs)  
- Tutos clés utilisés : ...  
- Usage de l’IA : voir section ci-dessus  
- Autres ressources utiles : ...
