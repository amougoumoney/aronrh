
import { createI18n } from 'vue-i18n'
import en from './translation/en.json'
import fr from './translation/fr.json'

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en', 
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

export default i18n
