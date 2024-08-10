import { PButton } from "../../shared/ui/buttons";

type FormStepsButtonsProps = {
  step: number;
  isSubmitting: boolean;
  prevStep: () => void;
  nextStep: () => void;
};

export const FormStepsButtons = ({ step, isSubmitting, prevStep, nextStep }: FormStepsButtonsProps) => {
  return (
    <div className="flex justify-between mt-4">
      {step > 1 && (
        <PButton type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">
          Back
        </PButton>
      )}
      {step < 4 && (
        <PButton
          type="button"
          onClick={nextStep}
          className={`py-2 px-4 rounded text-white ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"}`}
          disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Next"}
        </PButton>
      )}
    </div>
  );
};
