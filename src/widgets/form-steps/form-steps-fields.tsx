import { FieldErrors } from "react-hook-form";
import { FormInput } from "../../shared/form";

type FormStepsFieldsProps = {
  step: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  errors: FieldErrors;
};

const formFields = [
  {
    name: "username",
    type: "text",
    label: "Username",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
  },
];

export const FormStepsFields: React.FC<FormStepsFieldsProps> = ({ step, register, errors }) => {
  const field = formFields[step - 1];

  if (!field) return null;

  return <FormInput type={field.type} register={register} name={field.name} label={field.label} error={errors[field.name]?.message as string | undefined} />;
};
