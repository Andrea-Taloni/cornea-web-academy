// src/utils/textFormatting.js

/**
 * Converts markdown-style bold text (**text**) to HTML bold tags
 * @param {string} text - The text to process
 * @returns {string} - HTML string with bold tags
 */
export function processBoldText(text) {
  if (!text) return ''

  // Convert **text** to <strong>text</strong>
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

/**
 * Checks if text contains markdown bold markers
 * @param {string} text - The text to check
 * @returns {boolean} - True if contains bold markers
 */
export function hasBoldMarkers(text) {
  if (!text) return false
  return /\*\*[^*]+\*\*/.test(text)
}
