import { FieldErrors } from "react-hook-form";
import { FormInput } from "../../shared/form";

type FormStepsFieldsProps = {
  step: number;
  register: any;
  errors: FieldErrors;
};

export const FormStepsFields: React.FC<FormStepsFieldsProps> = ({ step, register, errors }) => {
  switch (step) {
    case 1:
      return <FormInput type="text" register={register} name="username" label="Username" error={errors.username?.message as string | undefined} />;
    case 2:
      return <FormInput type="password" register={register} name="password" label="Password" error={errors.password?.message as string | undefined} />;
    case 3:
      return <FormInput type="email" register={register} name="email" label="Email" error={errors.email?.message as string | undefined} />;
    default:
      return null;
  }
};
