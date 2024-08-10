interface ErrorBoxProps {
  children?: React.ReactNode;
}

export const ErrorBox = ({ children }: ErrorBoxProps) => {
  return <div className="text-red-500">{children}</div>;
};
