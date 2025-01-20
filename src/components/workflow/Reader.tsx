import { useState, useEffect } from "react";
import { DisplayContent } from "../DisplayContent";
import { NavigationControls } from "../NavigationControls";
import { ProgressBar } from "../ProgressBar";
import { readCleartext } from "../../services/fileService";
import { useReadingStats } from "../../context/ReadingStatsContext";
import BackButton from "../BackButton";
import RestartButton from "../RestartButton";

export interface ReaderProps {
  frequency: number;
  phraseLength: number;
  viewMode: "word" | "phrase";
  fontSize: number;
  inputText: string;
  onBack: () => void;
}

export const Reader = ({
  frequency,
  phraseLength,
  viewMode,
  fontSize,
  inputText,
  onBack
}: ReaderProps) => {
  const [content, setContent] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const { incrementWords, startTimer, stopTimer, resetStats } = useReadingStats();

  useEffect(() => {
    const processInitialText = async () => {
      if (inputText) {
        try {
          resetStats();
          const words = await readCleartext(inputText);
          setContent(words);
          setCurrentIndex(0);
          setPlaying(false);
        } catch (error) {
          alert(error);
        }
      }
    };

    processInitialText();
  }, [inputText, resetStats]);

  useEffect(() => {
    if (playing && content.length > 0) {
      startTimer();
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex =
            content.length - (viewMode === "phrase" ? phraseLength : 1);
          if (prev >= maxIndex) {
            setPlaying(false);
            stopTimer();
            return prev;
          }
          incrementWords(viewMode === "phrase" ? phraseLength : 1);
          return prev + 1;
        });
      }, frequency);
      return () => clearInterval(interval);
    }
  }, [
    playing,
    content,
    frequency,
    viewMode,
    phraseLength,
    startTimer,
    stopTimer,
    incrementWords,
  ]);

  const handleRestart = async () => {
    setPlaying(false);
    stopTimer();
    resetStats();
    setCurrentIndex(0);
    
    try {
      const words = await readCleartext(inputText);
      setContent(words);
    } catch (error) {
      alert(error);
    }
  };

  const handleStep = (direction: "back" | "forward") => {
    const step = direction === "back" ? -1 : 1;
    setCurrentIndex((prev) => {
      const newIndex = prev + step;
      if (direction === "forward") {
        incrementWords(viewMode === "phrase" ? phraseLength : 1);
      }
      return Math.max(0, Math.min(content.length - 1, newIndex));
    });
  };

  const togglePlay = () => {
    setPlaying((prev) => {
      const newVal = !prev;
      if (newVal) {
        startTimer();
      } else {
        stopTimer();
      }
      return newVal;
    });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
<     div className="flex justify-between items-center mb-4">
        <BackButton onClick={onBack} label="Voltar para configurações" />
        <RestartButton onClick={handleRestart} />
      </div>

      {content.length > 0 && (
        <div className="space-y-4">
          <div className="bg-gray-100 p-8 rounded-lg min-h-[200px] flex items-center justify-center">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-center">
                {viewMode === "word" ? "Palavra Atual:" : "Frase Atual:"}
              </h2>
              <DisplayContent
                content={content}
                currentIndex={currentIndex}
                viewMode={viewMode}
                phraseLength={phraseLength}
                fontSize={fontSize}
              />
            </div>
          </div>

          <NavigationControls
            onStepBack={() => handleStep("back")}
            onTogglePlay={togglePlay}
            onStepForward={() => handleStep("forward")}
            canStepBack={currentIndex > 0}
            canStepForward={currentIndex < content.length - 1}
            isPlaying={playing}
          />

          <ProgressBar
            currentIndex={currentIndex}
            totalWords={content.length}
            viewMode={viewMode}
          />
        </div>
      )}
    </div>
  );
};