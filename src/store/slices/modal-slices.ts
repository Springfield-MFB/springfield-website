import { StateCreator } from "zustand";

// Define the Modal slice interface
export interface ModalSlice {
  isOpen: boolean;
  modalType: string | null; // Helps manage different modal types
  openModal: (modalType: string) => void;
  closeModal: () => void;
}

// Create the Modal slice
export const createModalSlice: StateCreator<ModalSlice, [], [], ModalSlice> = (
  set
) => ({
  isOpen: false,
  modalType: null,
  openModal: (modalType: string) =>
    set(() => ({
      isOpen: true,
      modalType,
    })),
  closeModal: () =>
    set(() => ({
      isOpen: false,
      modalType: null,
    })),
});
