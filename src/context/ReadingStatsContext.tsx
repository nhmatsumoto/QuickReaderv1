// src/context/ReadingStatsContext.tsx
import React, { createContext, useState, useContext, useCallback } from "react";

interface ReadingStatsContextData {
  totalWordsRead: number;
  readingTime: number; // em milissegundos, por exemplo
  startTimer: () => void;
  stopTimer: () => void;
  incrementWords: (count: number) => void;
  resetStats: () => void;
}

const ReadingStatsContext = createContext<ReadingStatsContextData>(
  {} as ReadingStatsContextData
);

export const ReadingStatsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [totalWordsRead, setTotalWordsRead] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  // Poderíamos usar um "timer" para cronometrar a leitura.
  // Aqui, simplificamos com um "timestamp" de início.
  const [startTimestamp, setStartTimestamp] = useState<number | null>(null);

  // Inicia a contagem de tempo
  const startTimer = useCallback(() => {
    if (startTimestamp === null) {
      setStartTimestamp(Date.now());
    }
  }, [startTimestamp]);

  // Para o timer e acumula o tempo de leitura
  const stopTimer = useCallback(() => {
    if (startTimestamp !== null) {
      const end = Date.now();
      setReadingTime((prev) => prev + (end - startTimestamp));
      setStartTimestamp(null);
    }
  }, [startTimestamp]);

  // Incrementa o total de palavras lidas
  const incrementWords = useCallback((count: number) => {
    setTotalWordsRead((prev) => prev + count);
  }, []);

  // Reseta as estatísticas (caso deseje começar uma nova leitura)
  const resetStats = useCallback(() => {
    setTotalWordsRead(0);
    setReadingTime(0);
    setStartTimestamp(null);
  }, []);

  return (
    <ReadingStatsContext.Provider
      value={{
        totalWordsRead,
        readingTime,
        startTimer,
        stopTimer,
        incrementWords,
        resetStats,
      }}
    >
      {children}
    </ReadingStatsContext.Provider>
  );
};

export function useReadingStats() {
  return useContext(ReadingStatsContext);
}
