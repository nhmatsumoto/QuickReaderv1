import { splitWordAtORP } from "../services/highlightService"

interface DisplayContentProps {
  content: string[];
  currentIndex: number;
  viewMode: "word" | "phrase";
  phraseLength: number;
  fontSize: number;
}

export const DisplayContent = ({
  content,
  currentIndex,
  viewMode,
  phraseLength,
  fontSize,
}: DisplayContentProps) => {
  if (!content.length) return null;

  // Função aux p renderizar uma palavra com destaque
  const renderHighlightedWord = (word: string) => {
    const [prefix, highlight, suffix] = splitWordAtORP(word);
    return (
      <span>
        {prefix}
        <span className="text-red-500 font-bold">{highlight}</span>
        {suffix}
      </span>
    );
  };

  const dynamicStyle = {
    fontSize: `${fontSize}px`,
  };

  if (viewMode === "word") {
    return (
      <div
        className="text-center font-bold"
        style={dynamicStyle}
      >
        {renderHighlightedWord(content[currentIndex])}
      </div>
    );
  } else {
    const phrase = content
      .slice(currentIndex, currentIndex + phraseLength)
      .map((word, idx) => (
        <span key={idx} className="mx-1">
          {renderHighlightedWord(word)}
        </span>
      ));

    return (
      <div
        className="flex flex-wrap justify-center gap-2 font-bold text-center"
        style={dynamicStyle}
      >
        {phrase}
      </div>
    );
  }
};
