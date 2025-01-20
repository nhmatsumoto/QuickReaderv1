export interface ReadingSession {
    id: string;
    timestamp: number;
    duration: number; // em segundos
    wordsRead: number;
    averageSpeed: number; // palavras por minuto
    textTitle: string;
    completionPercentage: number;
  }
  
  export interface LibraryItem {
    id: string;
    title: string;
    fileName: string;
    content: string;
    addedAt: number;
    lastReadAt: number | null;
    totalWords: number;
    progress: number; // 0-100
  }
  
  export interface ReadingStats {
    totalTimeRead: number; // em segundos
    totalWordsRead: number;
    averageSpeed: number;
    sessionsCompleted: number;
    lastSession: ReadingSession | null;
  }