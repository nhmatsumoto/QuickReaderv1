import { useState } from 'react';
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

interface ConfigOptions {
  frequency: number;
  viewMode: "word" | "phrase";
  phraseLength: number;
  fontSize: number;
}

interface ConfigurationStepProps {
  onNext: (config: ConfigOptions) => void;
  onBack: () => void;
}

const ConfigurationStep = ({ onNext, onBack }: ConfigurationStepProps) => {
  const [config, setConfig] = useState<ConfigOptions>({
    frequency: 300,
    viewMode: "word",
    phraseLength: 3,
    fontSize: 100
  });

  const handleChange = (field: keyof ConfigOptions, value: number | "word" | "phrase") => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-6 bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-2 text-gray-700">
          <FiSettings className="text-xl" />
          <h2 className="text-xl font-semibold">Defina algumas configurações</h2>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <label className="block font-medium mb-1">Velocidade (ms):</label>
            <input
              type="number"
              value={config.frequency}
              onChange={(e) => handleChange('frequency', Math.max(1, Number(e.target.value)))}
              className="border rounded px-2 py-1 w-full focus:ring-2 
                focus:ring-blue-500 focus:outline-none"
              min={1}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Modo de Visualização:</label>
            <select
              value={config.viewMode}
              onChange={(e) => handleChange('viewMode', e.target.value as "word" | "phrase")}
              className="border rounded px-2 py-1 w-full focus:ring-2 
                focus:ring-blue-500 focus:outline-none"
            >
              <option value="word">Palavra</option>
              <option value="phrase">Frase</option>
            </select>
          </div>

          {config.viewMode === "phrase" && (
            <div>
              <label className="block font-medium mb-1">Palavras por Frase:</label>
              <input
                type="number"
                value={config.phraseLength}
                onChange={(e) => handleChange('phraseLength', 
                  Math.max(2, Math.min(5, Number(e.target.value)))
                )}
                className="border rounded px-2 py-1 w-full focus:ring-2 
                  focus:ring-blue-500 focus:outline-none"
                min={2}
                max={5}
              />
            </div>
          )}

          <div>
            <label className="block font-medium mb-1">Tamanho da fonte:</label>
            <input
              type="number"
              value={config.fontSize}
              onChange={(e) => handleChange('fontSize', Math.max(1, Number(e.target.value)))}
              className="border rounded px-2 py-1 w-full focus:ring-2 
                focus:ring-blue-500 focus:outline-none"
              min={10}
            />
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={onBack}
            className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 
              rounded-lg hover:bg-gray-200 transition-colors"
          >
            <MdArrowBack className="mr-2 text-xl" />
            Voltar
          </button>
          
          <button
            onClick={() => onNext(config)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white 
              rounded-lg hover:bg-blue-600 transition-colors"
          >
            Avançar
            <MdArrowForward className="ml-2 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationStep;