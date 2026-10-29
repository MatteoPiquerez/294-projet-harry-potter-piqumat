// src/utils/imageUrl.js

/**
 * Retourne l'URL complète d'une image pour aller la chercher sur internet.
 * Ou alors retourne l'image par défaut (fallback) si filename est vide.
 */
export function getImageUrl (filename, fallback = '/default_user_image.png') {
  if (!filename) {
    return fallback
  }
  return `${import.meta.env.VITE_API_URL}/${filename}`
}
