import { useState } from 'react';
import { FaRegPaste } from 'react-icons/fa6';
import { MdArrowForward } from "react-icons/md";

interface TextInputStepProps {
  onNext: (text: string) => void;
}

const TextInputStep = ({ onNext }: TextInputStepProps) => {
  const [text, setText] = useState<string>('');

  const handleNext = () => {
    onNext(text);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-gray-700">
          <FaRegPaste className="text-xl" />
          <h2 className="text-xl font-semibold">Digite ou cole seu texto</h2>
        </div>
        <textarea
          className="w-full h-64 p-4 border rounded-lg resize-none focus:ring-2 
            focus:ring-blue-500 focus:outline-none text-gray-700 bg-white"
          placeholder="Digite ou cole seu texto aqui..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={!text.trim()}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg
              hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
            Avançar
            <MdArrowForward className="ml-2 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextInputStep;