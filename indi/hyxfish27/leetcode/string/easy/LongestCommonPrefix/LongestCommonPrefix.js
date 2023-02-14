/**
 * longestCommonPrefix
 * @author hyxfish27
 * @param {string[]} strs
 * @return {string} prefixStr
 * @desc 比對前綴字串，找出最長組合
 */
export const longestCommonPrefix = (strs) => {
  let prefixStr = strs[0]

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i]

    if (!str || str === '') { return '' }

    for (let j = 0; j < prefixStr.length; j++) {
      if (prefixStr[j] !== str[j]) {
        prefixStr = prefixStr.slice(0, j)
      }
    }
  }
  return prefixStr
}
