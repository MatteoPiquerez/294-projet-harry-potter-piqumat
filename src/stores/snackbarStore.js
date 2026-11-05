import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    show: false,
    message: '',
    color: 'primary',
  }),

  actions: {
    // Affiche un message de confirmation/erreur n'importe où dans l'app
    notify (message, color = 'primary') {
      this.message = message
      this.color = color
      this.show = true
    },
  },
})
