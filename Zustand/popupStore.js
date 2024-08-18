import { create } from "zustand";

export const usePopupStore = create((set) => ({
  openedPopups: [],
  addPopup: (popup) => set((state) => {
    if (!state.openedPopups.includes(popup)) {
      return { openedPopups: [...state.openedPopups, popup] };
    }
    return state;
  }),
  removePopup: (popup) =>
    set((state) => ({ openedPopups: state.openedPopups.filter((p) => p !== popup) })),
  closeAllPopups: () => set({ openedPopups: [] }),
}));
