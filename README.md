# 🌐 Mon Projet Vue.js & Vuetify

## 1. 🎨 Présentation du projet

### Concept
J'ai choisi une API Harry Potter car je suis un grand fan de cette saga. 
Le public cible peut être soit des dévelopeur junior qui pourrait utiliser ce projet comme exemple, comme exercice 
ou comme template pour d'autre projet.
L'objectif de l'application est de faire un code propre pour que l'application puisse ensuite grandire et évoluer 
facilement. Pour que des fonctionnalitées puissent être rajouté 


### Fonctionnalités principales
- Affichage d’une liste de plein de personnage de la saga Harry Potter (via API)
- Recherche / Tri / Filtres : des fonctions de recherche sur les personnages et les sortilège sont disponible pour filtrer les recherches de manière pertinente
- Vue détail : en cliquant sur un personnage cela ouvre une carte avec des informations détaillé sur le personnage. Les sortilèges n'ont pas de vue détaillé car il y a trop peu d'information à présenter 
- 
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
- **IDE** : WebStorm 
- **Versioning** : Git + GitHub
- **Dépendances principales** : Vue 3, Vuetify 3, Pinia, Axios
- **Gestion API Keys** : `.env` + `.env.example`

### Installation & Run
- Cloner le repo : `git clone https://github.com/MatteoPiquerez/294-projet-harry-potter-piqumat.git`
- Installer : `npm install`
- Lancer : `npm run dev`
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
