const romanMap = new Map()

romanMap.set('I', 1)
romanMap.set('V', 5)
romanMap.set('X', 10)
romanMap.set('L', 50)
romanMap.set('C', 100)
romanMap.set('D', 500)
romanMap.set('M', 1000)

/**
 * @author hyxfish27
 * @param {string} s roman string
 * @return {number} integer
 * @desc 將羅馬數字轉換成整數
 */
export const romanToInteger = (s) => {
  let result = 0
  if (s === null || s === undefined) {
    result = 0
  } else {
    for (let i = 0; i < s.length; i++) {
      if (romanMap.get(s[i]) < romanMap.get(s[i + 1])) {
        result -= romanMap.get(s[i])
      } else {
        result += romanMap.get(s[i])
      }
    }
  }
  return result
}
