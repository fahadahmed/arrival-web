import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Store = {
  user: string | null;
  setUser: (name: string | null) => void;
};

export const useAppStore = create<Store>()(
  persist<Store>(
    (set) => ({
      user: null,
      setUser: (user) => set(() => ({ user })),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
