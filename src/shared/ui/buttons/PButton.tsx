interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const PButton = ({ className, onClick, children, disabled, type }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
