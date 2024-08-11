import React from "react";
import { ErrorBox } from "./ErrorBox";
import { useForm } from "react-hook-form";

interface FormInputProps {
  type: string;
  register: ReturnType<typeof useForm>["register"];
  name: string;
  error?: string;
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({ type, register, name, error, label }) => {
  return (
    <div>
      <label className="block mb-2">{label}:</label>
      <input type={type} {...register(name)} className="border p-2 w-full" />
      {error && <ErrorBox>{error}</ErrorBox>}
    </div>
  );
};
