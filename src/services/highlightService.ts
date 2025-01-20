/**
 * Retorna as três partes da palavra:
 * - prefix: tudo antes do caractere central
 * - highlight: o caractere central (ponto ORP)
 * - suffix: tudo depois do caractere central
 */
export const splitWordAtORP = (word: string): [string, string, string] => {
  if (!word) {
    return ["", "", ""];
  }

  const centerIndex = Math.floor(word.length / 2);

  const prefix = word.slice(0, centerIndex);
  const highlight = word[centerIndex] ?? "";
  const suffix = word.slice(centerIndex + 1);

  return [prefix, highlight, suffix];
};
  