import {create} from 'zustand'
import {persist} from 'zustand/middleware'


const authStore = (set: any) => ({
    profile: null,

    addUser: (user: any) => set({profile: user}),
    removeUser: () => set({profile: null})
})

const useAuthStore = create(persist( authStore, {
    name: 'auth'
}))

export default useAuthStore