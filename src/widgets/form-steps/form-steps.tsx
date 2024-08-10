import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useFormStore } from "../../app/providers/store";

import { usernameSchema, passwordSchema, emailSchema } from "../../shared/form/zod";

import { Toast } from "../../shared/toast";
import { FormInput } from "../../shared/form";
import { FormStepsButtons } from "./form-steps-buttons";

type UsernameSchema = z.infer<typeof usernameSchema>;
type PasswordSchema = z.infer<typeof passwordSchema>;
type EmailSchema = z.infer<typeof emailSchema>;

const stepSchemas = [usernameSchema, passwordSchema, emailSchema];

export const FormSteps: React.FC = () => {
  const { step, nextStep, prevStep, resetStep } = useFormStore();
  const schema = stepSchemas[step - 1];

  const [showToast, setShowToast] = React.useState(false);
  const [showForm, setShowForm] = React.useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UsernameSchema | PasswordSchema | EmailSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<UsernameSchema | PasswordSchema | EmailSchema> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
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
          {step === 1 && (
            <FormInput
              type="text"
              register={register}
              name="username"
              label="Username"
              error={(errors as { username?: { message?: string } }).username?.message}
            />
          )}

          {step === 2 && (
            <FormInput
              type="password"
              register={register}
              name="password"
              label="Password"
              error={(errors as { password?: { message?: string } }).password?.message}
            />
          )}

          {step === 3 && (
            <FormInput type="email" register={register} name="email" label="Email" error={(errors as { email?: { message?: string } }).email?.message} />
          )}

          <FormStepsButtons step={step} isSubmitting={isSubmitting} prevStep={prevStep} nextStep={() => handleSubmit(onSubmit)()} />
        </form>
      ) : (
        <Toast message="Success! Form completed." show={showToast} onClose={handleCloseToast} />
      )}
    </div>
  );
};
