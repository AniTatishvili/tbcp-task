import { PButton } from "../ui/buttons";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export const Toast = ({ message, show, onClose }: ToastProps) => {
  if (!show) return null;

  return (
    show && (
      <div className="flex flex-col items-center gap-4 fixed top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-4 rounded shadow-lg">
        <p>{message}</p>
        <PButton onClick={onClose} className="bg-[#d0006f] px-4 py-2 rounded">
          Close
        </PButton>
      </div>
    )
  );
};
