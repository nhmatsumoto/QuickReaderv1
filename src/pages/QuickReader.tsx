import React, { useState } from "react";
import { Reader } from "../components/workflow/Reader";

function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode; }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="relative bg-white p-6 rounded shadow max-w-sm w-full">
        {children}
      </div>
    </div>
  );
}

export const QuickReader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [frequency, setFrequency] = useState(150);
  const [viewMode, setViewMode] = useState<"word" | "phrase">("word");
  const [phraseLength, setPhraseLength] = useState(3);
  const [fontSize, setFontSize] = useState(16);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow p-4">
            <Reader
                onHandleModal={handleOpenModal}
                frequency={frequency}
                viewMode={viewMode}
                phraseLength={phraseLength}
                fontSize={fontSize}
            />
        </main>

        {/* <FloatingToolbar /> */}

        {isModalOpen && (
            <Modal onClose={closeModal}>
                <h2 className="text-lg font-semibold mb-4">Configurações de Leitura</h2>
                
                <div className="flex flex-col space-y-4">
                    <div>
                        <label className="block font-medium mb-1">Velocidade (ms):</label>
                        <input
                            type="number"
                            value={frequency}
                            onChange={(e) => setFrequency(Math.max(1, Number(e.target.value)))}
                            className="border rounded px-2 py-1 w-full"
                            min={1}
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Modo de Visualização:</label>
                        <select
                            value={viewMode}
                            onChange={(e) => setViewMode(e.target.value as "word" | "phrase")}
                            className="border rounded px-2 py-1 w-full"
                        >
                            <option value="word">Palavra</option>
                            <option value="phrase">Frase</option>
                        </select>
                    </div>

                    {viewMode === "phrase" && (
                        <div>
                            <label className="block font-medium mb-1">Palavras por Frase:</label>
                            <input
                            type="number"
                            value={phraseLength}
                            onChange={(e) =>
                                setPhraseLength(Math.max(2, Math.min(5, Number(e.target.value))))
                            }
                            className="border rounded px-2 py-1 w-full"
                            min={2}
                            max={5}
                            />
                        </div>
                    )}

                    <div>
                        <label className="block font-medium mb-1">Tamanho da fonte:</label>
                        <input
                            type="number"
                            value={fontSize}
                            onChange={(e) => setFontSize(Math.max(10, Number(e.target.value)))}
                            className="border rounded px-2 py-1 w-full"
                            min={10}
                        />
                    </div>

                    <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={closeModal}
                    >
                    Fechar
                    </button>
                </div>
            </Modal>
        )}
    </div>
  );
};
