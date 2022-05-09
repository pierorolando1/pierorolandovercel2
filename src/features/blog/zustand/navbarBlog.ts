import create from "zustand";

export const useStoreBlog = create<{ showBlogBar: boolean, show: () => void, hide: () => void }>((set) => ({
    showBlogBar: false,
    show: () => set({ showBlogBar: true }),
    hide: () => set({ showBlogBar: false }),
}))
