import { create } from 'zustand'

const useStore = create((set) => ({ 
    color: '#adb5bd',
    setColor: (newColor) => set({ color: newColor }),

    scale: 0.97,
    setScale: (newScale) => set({ scale: newScale }),

    reset: () => set({ color: '#adb5bd', scale: 0.97 })
}));

export default useStore;