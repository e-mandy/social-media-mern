import { create } from 'zustand';
import type { AuthStore } from '../schemas';
import type { RegisterUser } from '../schemas/index'

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    token: null,
    logout: () => set({ user: null })
}))

export const useIsAuthenticated = create(() => ({
    isLogin: (userStore: RegisterUser | null) => (userStore === null) ? false : true
}))