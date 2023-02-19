# Roman To Integer

leetcode: https://leetcode.com/problems/roman-to-integer/

## 思路

羅馬數字正常來說應該要遞減，s[i] > s[i+1]，如果出現遞增的情況，就代表要用減的

一般情況 -> 直接相加
如果後大於前 -> 相減


ex: MCMXCIV
group 1
M 1000 -> return 1000

group 2
C 100 -> return -100
M 1000 -> return 1000

group 3
X 10 -> return -10
C 100 -> return 100

group 4
I 1 -> return -1
V 5 -> return 5

result -> 1994

code

```js
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
export const romanToInt = (s) => {
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
```
