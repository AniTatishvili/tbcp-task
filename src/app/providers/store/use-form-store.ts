import { create } from "zustand";
import { FieldValues } from "react-hook-form";

interface FormValues {
  username: string;
  password: string;
  email: string;
}

interface FormState {
  step: number;
  formValues: FormValues;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
  setFormValues: (values: FieldValues) => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  formValues: {
    username: "",
    password: "",
    email: "",
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  resetStep: () => set({ step: 1, formValues: { username: "", password: "", email: "" } }),
  setFormValues: (values) =>
    set((state) => ({
      formValues: { ...state.formValues, ...values },
    })),
}));
