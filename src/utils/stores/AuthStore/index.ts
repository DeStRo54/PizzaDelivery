import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

interface AuthStoreState {
  isLoggedIn: boolean;
  logOut: boolean;
  user: User;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLogOut: (logOut: boolean) => void;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthStoreState>()(
  devtools((set) => ({
    isLoggedIn: false,
    logOut: false,
    user: {} as User,
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    setLogOut: (logOut: boolean) => set({ logOut }),
    setUser: (user: any) => set({ user })
  }))
);
