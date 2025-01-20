interface ProgressBarProps {
  currentIndex: number;
  totalWords: number;
  viewMode: "word" | "phrase";
}

export const ProgressBar = ({
  currentIndex,
  totalWords,
  viewMode,
}: ProgressBarProps) => {
  const getProgressPercentage = () => {
    if (!totalWords) return 0;
    return Math.round((currentIndex / (totalWords - 1)) * 100);
  };

  return (
    <div className="space-y-2">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${getProgressPercentage()}%` }}
        ></div>
      </div>
      <div className="text-sm text-gray-500 flex justify-between">
        <span>
          {viewMode === "word" ? "Palavra" : "Frase"} {currentIndex + 1} de{" "}
          {totalWords}
        </span>
        <span>{getProgressPercentage()}% concluído</span>
      </div>
    </div>
  );
};
