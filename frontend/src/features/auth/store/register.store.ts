import { create } from 'zustand';
import type { AuthStore } from '../schemas';

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    token: null,
    logout: () => set({ user: null })
}))