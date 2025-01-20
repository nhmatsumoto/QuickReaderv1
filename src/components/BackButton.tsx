import { MdArrowBack } from "react-icons/md";

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

const BackButton = ({ onClick, label = "Voltar" }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 
        rounded-lg hover:bg-gray-200 transition-colors"
    >
      <MdArrowBack className="text-xl" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;