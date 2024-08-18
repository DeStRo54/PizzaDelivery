import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

interface AuthStoreState {
  isLoggedIn: boolean;
  logOut: boolean;
  user: User;
  orderId: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLogOut: (logOut: boolean) => void;
  setUser: (user: any) => void;
  setOrderId: (orderId: string) => void;
}

export const useAuthStore = create<AuthStoreState>()(
  devtools((set) => ({
    isLoggedIn: false,
    logOut: false,
    user: {} as User,
    orderId: '',
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    setLogOut: (logOut: boolean) => set({ logOut }),
    setUser: (user: User) => set({ user }),
    setOrderId: (orderId: string) => set({ orderId })
  }))
);
