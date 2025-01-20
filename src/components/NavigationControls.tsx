interface NavigationControlsProps {
  onStepBack: () => void;
  onTogglePlay: () => void;
  onStepForward: () => void;
  canStepBack: boolean;
  canStepForward: boolean;
  isPlaying: boolean;
}

export const NavigationControls = ({
  onStepBack,
  onTogglePlay,
  onStepForward,
  canStepBack,
  canStepForward,
  isPlaying,
}: NavigationControlsProps) => {
  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={onStepBack}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        disabled={!canStepBack}
      >
        ← Anterior
      </button>
      <button
        onClick={onTogglePlay}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isPlaying ? "Pausar" : "Iniciar"}
      </button>
      <button
        onClick={onStepForward}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        disabled={!canStepForward}
      >
        Próximo →
      </button>
    </div>
  );
};
