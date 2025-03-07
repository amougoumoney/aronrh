import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: useStorage('user', null), // Persist user object
        token: useStorage('token', null), // Persist JWT or session token
    }),
    getters: {
        isLoggedIn: (state) => !!state.user, // Determine if user is logged in
        getUser: (state) => state.user
    },
    actions: {
        login(userData, token) {
            this.user = JSON.stringify(userData)
            this.token = JSON.stringify(userData)
            console.log('login', this.user)
        },
        logout() {
            this.user = null
            this.token = null
        },
    },
})
