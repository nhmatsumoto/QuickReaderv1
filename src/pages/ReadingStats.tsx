import { useReadingStats } from "../context/ReadingStatsContext";

export function ReadingStats() {
  const { totalWordsRead, readingTime } = useReadingStats();

  const seconds = Math.floor(readingTime / 1000);

  const wpm = readingTime > 0 ? Math.round((totalWordsRead / seconds) * 60) : 0;

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8">
        <h2 className="text-2xl font-bold mb-4">Estatísticas de Leitura</h2>
        <div className="space-y-2">
          <p>
            <strong>Total de Palavras Lidas:</strong> {totalWordsRead}
          </p>
          <p>
            <strong>Tempo de Leitura:</strong> {seconds} segundo(s)
          </p>
          <p>
            <strong>Velocidade de Leitura (WPM):</strong> {wpm} p/m
          </p>
        </div>
      </div>
    </div>
  );
}
