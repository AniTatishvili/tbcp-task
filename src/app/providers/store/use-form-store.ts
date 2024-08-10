import { create } from "zustand";

interface FormState {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  resetStep: () => set({ step: 1 }),
}));
