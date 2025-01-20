// import ePub, { Book } from "epubjs";

export const readTxtFile = async (file: File): Promise<string[]> => {
    if (!file || file.type !== "text/plain") {
      throw new Error("O arquivo não é .txt ou está inválido.");
    }
  
    try {
      const text = await file.text();
      // Quebra o texto em palavras, filtrando as vazias.
      const words = text.split(/\s+/).filter((word) => word.length > 0);
      return words;
    } catch (error) {
      throw new Error("Erro ao ler o arquivo: " + error);
    }
};

export const readCleartext = async (text: string): Promise<string[]> => {
  if (text.length === 0 || text === null) {
    throw new Error("texto informado é vazio ou nulo")
  }

  return text.split(/\s+/).filter((word) => word.length > 0);
};

