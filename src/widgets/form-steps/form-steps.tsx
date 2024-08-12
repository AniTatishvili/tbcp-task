import React from "react";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useFormStore } from "../../app/providers/store";
import { stepSchemas, StepSchema } from "../../shared/form/zod";

import { Toast } from "../../shared/toast";
import { FormStepsButtons } from "./form-steps-buttons";
import { FormContent } from "./form-content";

export const FormSteps: React.FC = () => {
  const { step, nextStep, prevStep, resetStep, formValues, setFormValues } = useFormStore();
  const schema = stepSchemas[step - 1];

  const [showToast, setShowToast] = React.useState(false);
  const [showForm, setShowForm] = React.useState(true);

  const FormInputNames = ["username", "password", "email"];

  const inputName = FormInputNames[step - 1];

  const form = useForm<StepSchema>({
    resolver: zodResolver(schema),
    defaultValues: formValues,
  });

  const { isSubmitting } = form.formState;

  React.useEffect(() => {
    form.reset(formValues);
  }, [formValues, form.reset]);

  const onSubmit: SubmitHandler<StepSchema> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      setFormValues(data);
      if (step < 3) {
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
    resetStep();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {showForm ? (
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-6 flex w-[280px] flex-col gap-4">
              <FormContent inputName={inputName} />
              <FormStepsButtons step={step} isSubmitting={isSubmitting} prevStep={prevStep} nextStep={() => form.handleSubmit(onSubmit)()} />
            </div>
          </form>
        </FormProvider>
      ) : (
        <Toast message="Success! Form completed." show={showToast} onClose={handleCloseToast} />
      )}
    </div>
  );
};
