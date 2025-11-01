/**
 * Feature Flags Configuration
 *
 * Questo file controlla quali funzionalità sono abilitate o disabilitate nel sito.
 * Cambia semplicemente true/false per attivare/disattivare le funzionalità.
 */

export const features = {
  /**
   * Authentication Features
   *
   * Imposta su `false` per disabilitare temporaneamente login/register
   * Imposta su `true` per riabilitare quando le questioni legali sono risolte
   *
   * Quando disabilitato:
   * - I bottoni Login/Register non saranno visibili nell'header
   * - Le route /login e /register saranno bloccate
   * - Gli utenti già loggati potranno ancora accedere al loro profilo
   */
  enableAuth: false, // Cambia questo a `true` quando sei pronto!
}
