import { useStore } from "@/store";

export const openProfileModal = () => {
  useStore.getState().openModal("profile");
};

export const closeModal = () => {
  useStore.getState().closeModal();
};
