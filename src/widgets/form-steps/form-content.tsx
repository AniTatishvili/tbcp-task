import { FC } from "react";
import { FormInput } from "../../shared/form/FormInput";

interface FormContentProps {
  inputName: string;
}

export const FormContent: FC<FormContentProps> = ({ inputName }) => <FormInput inputName={inputName} />;
