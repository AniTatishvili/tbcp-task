import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface FormInputProps {
  inputName: string;
  className?: string;
}

export const FormInput: FC<FormInputProps> = ({ inputName }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[inputName]?.message as string;

  return (
    <div className="flex flex-col gap-2 capitalize">
      <label className="block mb-2">{inputName}:</label>
      <input {...register(inputName)} placeholder={inputName} className="border p-2 w-full" />
      {error && <p className="text-sm text-[#CC241D]">{error}</p>}
    </div>
  );
};
