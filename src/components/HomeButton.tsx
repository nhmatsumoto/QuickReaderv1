import { MdHome } from "react-icons/md";

interface HomeButtonProps {
  onClick: () => void;
  className?: string;
}

const HomeButton = ({ onClick, className = "" }: HomeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 
        rounded-lg hover:bg-gray-200 transition-colors ${className}`}
      title="Voltar ao início"
    >
      <MdHome className="text-xl" />
      <span>Início</span>
    </button>
  );
};

export default HomeButton;