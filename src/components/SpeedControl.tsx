interface SpeedControlProps {
  frequency: number;
  onFrequencyChange: (value: number) => void;
}

export const SpeedControl = ({
  frequency,
  onFrequencyChange,
}: SpeedControlProps) => {
  return (
    <div className="flex items-center gap-4">
      <label className="font-medium">Velocidade (ms):</label>
      <input
        type="number"
        value={frequency}
        onChange={(e) => onFrequencyChange(Math.max(1, Number(e.target.value)))}
        className="border rounded px-2 py-1 w-24"
        min={1}
      />
    </div>
  );
};
