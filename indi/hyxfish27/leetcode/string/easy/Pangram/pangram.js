/**
 * @author hyxfish27
 * @param {string} sentence
 * @returns {boolean} result
 * @desc 檢查 sentence 是否為 pangram 語句
 */
export const pangram = (sentence) => {
  if (sentence.length > 1000) {
    return false
  }

  const alphabet = []
  for (let i = 0; i < 26; i++) {
    alphabet[i] = false
  }

  for (let i = 0; i < sentence.length; i++) {
    alphabet[sentence.charCodeAt(i) - 97] = true
  }

  return alphabet.every(char => char === true)
}
