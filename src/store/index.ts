import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserSlice, createUserSlice } from "./slices/user-slice";
import { createModalSlice, ModalSlice } from "./slices/modal-slices";

interface RootState extends UserSlice, ModalSlice {}

// Combine multiple slices into a single store
export const useStore = create<RootState>((...set) => ({
  ...createUserSlice(...set),
  ...createModalSlice(...set),
}));

export const usePersistStore = create<RootState>()(
  devtools(
    persist(
      (...set) => ({
        ...createModalSlice(...set),
        ...createUserSlice(...set),
      }),
      { name: "app-store" }
    )
  )
);
