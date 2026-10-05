import { defineStore } from 'pinia'
import api from "@/plugins/axios";

export const useCharacterStore = defineStore('character', {
  state: () => ({
    isLoading: false,
    spells: [],
    characters: [],
  }),

  getters: {
    /**
     * Nombre total de personnage dans le store.
     * @param {Object} state - Le state du store
     * @returns {number}
     */
    totalCharacters: (state) => {
      return state.characters.length
    },

    /**
     * Trouve un Personnage par son identifiant.
     * Retourne une fonction (getter avec paramètre).
     * @param {Object} state - Le state du store
     * @returns {function(string): Object|undefined}
     */
    getCharacterById: (state) => {
      return (characterId) => {
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
          this.fetchSpells({ withLoader: false }),
          this.fetchCharacters({ withLoader: false }),
        ])
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
        const response = await api.get('/types')

        this.spells = response.data
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
        const response = await api.get('/pokemons')

        this.characters = response.data
      } catch (error) {
        console.error('Erreur lors du chargement des Personnages :', error.message)
        this.characters = []
      } finally {
        if (withLoader) this.isLoading = false
      }
    },
  },
})
