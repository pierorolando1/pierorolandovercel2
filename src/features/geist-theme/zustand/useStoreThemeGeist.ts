import create from "zustand";

const THEMES = ["light", "dark", "default"] as const;

export type Theme = typeof THEMES[number];

const useStoreTheme = create<{ theme: Theme, setTheme: (theme: Theme) => void }>((set) => ({
    theme: "default",
    setTheme: (theme: Theme) => {
        localStorage.setItem("theme", theme);
        set({ theme })
    },
}))

export const useGeistTheme = () => {
    const currentTheme = useStoreTheme(state => state.theme)
    const setTheme = useStoreTheme(state => state.setTheme)

    return {
        currentTheme,
        setTheme
    }

}
