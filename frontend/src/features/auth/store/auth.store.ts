import { create } from 'zustand';
import type { AuthStore } from '../schemas';
import type { RegisterUser } from '../schemas/index'

export const useAuthStore = create<AuthStore>((set) => ({
    token: null,

    logout: () => set({ token: null }),

    login: (token: string) => set({ token: token})
}))

export const useIsAuthenticated = create(() => ({
    isLogin: (userStore: string | null) => (userStore === null) ? false : true
}))