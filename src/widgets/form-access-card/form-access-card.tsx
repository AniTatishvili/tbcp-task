interface CardProps {
  title: string;
  content: string;
  onClick?: () => void;
}

export const FormAccessCard = ({ title, content, onClick }: CardProps) => {
  return (
    <div className="bg-[#26475e] shadow-lg rounded-lg p-10 max-w-xl mx-auto my-10 cursor-pointer" onClick={onClick}>
      <h2 className="text-[#fff] text-xl font-semibold mb-2">{title}</h2>
      <p className="text-[#fff]">{content}</p>
    </div>
  );
};
