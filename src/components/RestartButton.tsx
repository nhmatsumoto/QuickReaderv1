import { MdRefresh } from "react-icons/md";

interface RestartButtonProps {
  onClick: () => void;
  className?: string;
}

const RestartButton = ({ onClick, className = "" }: RestartButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-white bg-blue-500 
        rounded-lg hover:bg-blue-600 transition-colors ${className}`}
      title="Reiniciar leitura"
    >
      <MdRefresh className="text-xl" />
      <span>Reiniciar</span>
    </button>
  );
};

export default RestartButton;