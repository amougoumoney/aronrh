module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true, // Utiliser les dernières fonctionnalités JavaScript
  },
  extends: [
    'eslint:recommended', // Règles de base ESLint
    'plugin:vue/vue3-recommended', // Recommandations officielles pour Vue 3
  ],
  parserOptions: {
    ecmaVersion: 'latest', // Permet d'utiliser la dernière version d'ECMAScript
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 'off', // Désactiver l'erreur sur les noms de composants à un seul mot
    'no-unused-vars': 'warn', // Avertir sur les variables non utilisées
    'vue/no-unused-components': 'warn', // Avertir sur les composants non utilisés
  },
};
