import create from 'zustand';

const useAuth = create((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));

export { useAuth };