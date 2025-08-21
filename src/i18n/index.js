import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import it from '../locales/it.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import de from '../locales/de.json'
import ro from '../locales/ro.json'
import ru from '../locales/ru.json'
import zh from '../locales/zh.json'
import pl from '../locales/pl.json'
import cs from '../locales/cs.json'

const messages = {
  en,
  it,
  es,
  fr,
  de,
  ro,
  ru,
  zh,
  pl,
  cs
}

// Get saved language or detect browser language
const savedLang = localStorage.getItem('language')
const browserLang = navigator.language.split('-')[0]
const defaultLang = savedLang || (messages[browserLang] ? browserLang : 'en')

const i18n = createI18n({
  legacy: false,
  locale: defaultLang,
  fallbackLocale: 'en',
  messages,
  globalInjection: true
})

export default i18n