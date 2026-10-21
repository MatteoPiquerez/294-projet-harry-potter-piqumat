import { defineStore } from 'pinia'
import api from '@/plugins/axios.js'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    isLoading: false,
    spells: [],
    characters: [],
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
     * @returns {function(string): Object|undefined}
     */
    getCharacterById: state => {
      return characterId => {
        return state.characters.find(character => character.id === characterId)
      }
    },
  },

  actions: {
    async init () {
      console.log('Initialisation du store Personnage...')
      this.isLoading = true

      try {
        await Promise.all([
          this.fetchCharacters({ withLoader: false }),
          this.fetchSpells({ withLoader: false }),
        ])
        console.log(this.characters.value)
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
        const response = await api.get('/spells')
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
        const response = await api.get('/characters')
        this.characters = response.data.data
        console.log(this.characters[1])  // retourne un proxy qqch -> fonctionne pas
        console.log(response.data.data[2].name) // retourne l'objet -> fonctionne
      } catch (error) {
        console.error('Erreur lors du chargement des Personnages :', error.message)
        this.characters = []
      } finally {
        if (withLoader) this.isLoading = false
      }
    },
  },
})
