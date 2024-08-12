import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

interface AuthStoreState {
  isLoggedIn: boolean;
  user: any;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthStoreState>()(
  devtools((set) => ({
    isLoggedIn: false,
    user: {},
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    setUser: (user: any) => set({ user })
  }))
);
