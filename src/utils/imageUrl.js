// src/utils/imageUrl.js

/**
 * Retourne l'URL complète d'une image pour aller la chercher sur internet.
 * Ou alors retourne l'image par défaut (fallback) si filename est vide.
 */
import defaultUserImage from '@/assets/default_user_image.png'
import { API_BASE_URL } from '@/plugins/axios.js'

export function getImageUrl (filename, fallback = defaultUserImage) {
  if (!filename) {
    return fallback
  }
  return `${API_BASE_URL}/${filename}`
}
