import { defineStore } from 'pinia'
import api from '@/plugins/axios.js'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    isLoading: false,
    spells: [],
    characters: [],
    species: ['human', 'ghost', 'poltergeist', 'owl', 'toad', 'goblin', 'dog', 'phoenix', 'cat', 'half-giant'],
    favorites: [],
  }),

  getters: {
    /**
     * Nombre total de personnages dans le store.
     * @param {Object} state - Le state du store
     * @returns {number}
     */
    totalCharacters: state => {
      return state.characters.length
    },

    /**
     * Trouve un Personnage par son identifiant.
     * Retourne une fonction (getter avec paramètre).
     * @param {Object} state - Le state du store
     * @returns {function(number): Object|undefined}
     */
    getCharacterById: state => {
      return characterId => {
        return state.characters.find(character => character.id === Number(characterId))
      }
    },

    /**
     * Nombre total de favoris dans le store.
     * @param {object} state - le state du store
     * @returns {number} le nombre de favoris
     */
    totalFavorites: state => {
      return state.favorites.length
    },

    /**
     * Retourne une fonction qui va elle-même retourner un boolean
     * à true si le personnage est dans les favoris.
     * @param {object} state - le state du store
     * @returns {function(Object): boolean}
     */
    isFavorite: state => {
      return character => {
        return state.favorites.includes(character.id)
      }
    },

    /**
     * Fonction qui va transformer la liste d'id de personnage en objet Personnage.
     * @param {object} state - le state du store
     * @returns {Object[]} la liste des personnages (objet).
     */
    getFavorites: state => {
      const favoriteCharacters = state.favorites.map(favoriteId => {
        return state.characters.find(characters => characters.id === favoriteId)
      })
      return favoriteCharacters.filter(characters => characters !== undefined)
    },
  },

  actions: {

    /**
     * Fonction appelé au chargement de App.vue
     * Cette fonction va servir à initialiser les states du stores
     * @returns {Promise<void>}
     */
    async init () {
      console.log('Initialisation du store Personnage...')
      this.isLoading = true

      try {
        await Promise.all([
          this.fetchCharacters({ withLoader: false }),
          this.fetchSpells({ withLoader: false }),
        ])
        this.loadFavorites()
        console.log('Store Personnage initialisé')
      } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error)
      } finally {
        this.isLoading = false
      }
    },

    async fetchSpells ({ withLoader = true } = {}) {
      if (withLoader) this.isLoading = true

      try {
        const response = await api.get('/api/harrypotter/spells')
        this.spells = response.data.data
      } catch (error) {
        console.error('Erreur lors du chargement des sortilèges:', error.message)
        this.spells = []
      } finally {
        if (withLoader) this.isLoading = false
      }
    },

    async fetchCharacters ({ withLoader = true } = {}) {
      if (withLoader) this.isLoading = true
      try {
        const response = await api.get('/api/harrypotter/characters?limit=100')
        this.characters = response.data.data
        this.cleanupFavorites()
      } catch (error) {
        console.error('Erreur lors du chargement des Personnages :', error.message)
        this.characters = []
      } finally {
        if (withLoader) this.isLoading = false
      }
    },

    /**
     * Fonction qui va aller chercher les favoris dans le localStorage et les
     * stocker dans le state du store (favorites).
     */
    loadFavorites () {
      try {
        const savedFavorites = localStorage.getItem('character_favorites')
        if (savedFavorites) {
          this.favorites = JSON.parse(savedFavorites)
          console.log('Favoris chargés :', this.favorites.length, 'éléments')
        } else {
          this.favorites = []
        }
      } catch (error) {
        console.error('Erreur lors du chargement des favoris :', error)
        this.favorites = []
      }
    },

    /**
     * Fonction qui va aller stocker la liste des favoris dans le localStorage
     * du navigateur.
     */
    saveFavorites () {
      try {
        localStorage.setItem('character_favorites', JSON.stringify(this.favorites))
      } catch (error) {
        console.error('Erreur lors de la sauvegarde des favoris :', error)
      }
    },

    /**
     * Fonction qui va permettre de changer un personnage.
     * S'il est en favoris, on va le supprimer des favoris.
     * S'il n'y est pas encore, on va l'ajouter.
     * @param character Le personnage à changer.
     */
    toggleFavorite (character) {
      const favoriteIndex = this.favorites.findIndex(
        favoriteId => favoriteId === character.id,
      )

      if (favoriteIndex === -1) {
        // Pas encore favori → on l'ajoute
        this.favorites.push(character.id)
      } else {
        // Déjà favori → on le retire
        this.favorites.splice(favoriteIndex, 1)
      }

      // Sauvegarder après chaque changement
      this.saveFavorites()
    },

    cleanupFavorites () {
      const initialCount = this.favorites.length

      this.favorites = this.favorites.filter(favoriteId => {
        return this.characters.some(character => character.id === favoriteId)
      })

      const removedCount = initialCount - this.favorites.length
      if (removedCount > 0) {
        console.log('Nettoyage :', removedCount, 'favoris obsolètes supprimés')
        this.saveFavorites()
      }
    },

  },
})
