interface VisualizationControlsProps {
  viewMode: "word" | "phrase";
  onChangeViewMode: (mode: "word" | "phrase") => void;
  phraseLength: number;
  onChangePhraseLength: (length: number) => void;
  frequency: number;
  onChangeFrequency: (freq: number) => void;
  fontSize: number;
  onChangeFontSize: (size: number) => void;
}

export const VisualizationControls = ({
  viewMode,
  onChangeViewMode,
  phraseLength,
  onChangePhraseLength,
  frequency,
  onChangeFrequency,
  fontSize,
  onChangeFontSize,
}: VisualizationControlsProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <label className="font-medium">Modo de Visualização:</label>
        <select
          value={viewMode}
          onChange={(e) => onChangeViewMode(e.target.value as "word" | "phrase")}
          className="border rounded px-2 py-1"
        >
          <option value="word">Palavra</option>
          <option value="phrase">Frase</option>
        </select>
      </div>

      {viewMode === "phrase" && (
        <div className="flex flex-wrap items-center gap-4">
          <label className="font-medium">Palavras por frase:</label>
          <input
            type="number"
            value={phraseLength}
            onChange={(e) =>
              onChangePhraseLength(Math.max(2, Math.min(5, Number(e.target.value))))
            }
            className="border rounded px-2 py-1 w-16"
            min={2}
            max={5}
          />
        </div>
      )}
      
      <div className="flex flex-wrap items-center gap-4">
        <label className="font-medium">Velocidade (ms):</label>
        <input
          type="number"
          value={frequency}
          onChange={(e) => onChangeFrequency(Math.max(1, Number(e.target.value)))}
          className="border rounded px-2 py-1 w-24"
          min={1}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <label className="font-medium">Tamanho da fonte:</label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => onChangeFontSize(Math.max(1, Number(e.target.value)))}
          className="border rounded px-2 py-1 w-24"
          min={12}
        />
      </div>

    </div>
  );
};
