// src/utils/imageUrl.js

/**
 * Retourne l'URL complète d'une image dans le dossier /images/
 */
export function getImageUrl (filename, fallback = '/default_user_image.png') {
  if (!filename) {
    return fallback
  }
  return `${import.meta.env.VITE_API_URL}/${filename}`
}
