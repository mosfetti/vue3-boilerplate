import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        msg: 'Hello World',
    }),
    getters: {
        // ...
    },  
    actions: {
        // ...
    }
})