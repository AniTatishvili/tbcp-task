import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { useFormStore } from "../../app/providers/store";
import { usernameSchema, passwordSchema, emailSchema } from "../../shared/form/zod";

import { Toast } from "../../shared/toast";
import { FormStepsButtons } from "./form-steps-buttons";
import { FormStepsFields } from "./form-steps-fields";

type UsernameSchema = z.infer<typeof usernameSchema>;
type PasswordSchema = z.infer<typeof passwordSchema>;
type EmailSchema = z.infer<typeof emailSchema>;

type FormValues = UsernameSchema | PasswordSchema | EmailSchema;

const stepSchemas = [usernameSchema, passwordSchema, emailSchema];

export const FormSteps: React.FC = () => {
  const { step, nextStep, prevStep, resetStep, formValues, setFormValues } = useFormStore();
  const schema = stepSchemas[step - 1];

  const [showToast, setShowToast] = React.useState(false);
  const [showForm, setShowForm] = React.useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: formValues,
    mode: "onChange",
  });

  React.useEffect(() => {
    reset(formValues);
  }, [formValues, reset]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      setFormValues(data);
      if (step < stepSchemas.length) {
        nextStep();
      } else {
        setShowForm(false);
        setShowToast(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
    setShowForm(true);
    reset();
    resetStep();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {showForm ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormStepsFields step={step} register={register} errors={errors} />
          <FormStepsButtons step={step} isSubmitting={isSubmitting} prevStep={prevStep} nextStep={() => handleSubmit(onSubmit)()} />
        </form>
      ) : (
        <Toast message="Success! Form completed." show={showToast} onClose={handleCloseToast} />
      )}
    </div>
  );
};
