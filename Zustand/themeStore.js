import {create} from "zustand";

export const useThemeStore = create((set)=>({
    theme: "neomorphic",
    setTheme: (theme) => set({theme})
}))