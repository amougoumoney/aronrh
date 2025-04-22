// src/lang/language.js
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    locale: localStorage.getItem('lang') || 'en', // Stockage persistant
  }),
  actions: {
    set(lang) {
      this.locale = lang
      localStorage.setItem('lang', lang) 
    },
  },
})
