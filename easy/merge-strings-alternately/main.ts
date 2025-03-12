export function mergeAlternately(word1: string, word2: string): string {
  // For each index in the shorter word, add the current char from each word
  let mergedString = "";
  const iterationLength = Math.min(word1.length, word2.length);
  for (let i = 0; i < iterationLength; i++) {
    mergedString += `${word1[i]}${word2[i]}`;
  }

  // Append remainder form the longer word
  if (word1.length !== word2.length) {
    mergedString +=
      word1.length > word2.length
        ? word1.substring(iterationLength)
        : word2.substring(iterationLength);
  }

  return mergedString;
}
