leetcode: https://leetcode.com/problems/longest-common-prefix/

題目給訂一個陣列，回傳最長的前綴字串，若找不到對應的前綴則回傳 ""

ex 1: 
```js
const successStringCases = ['flower', 'flow', 'flight']
// output: 'fl'
```

ex 2: 
```js
const failedStringCases = ['dog', 'racecar', 'car']
// output: ''
```

ex 3:
```js
const emptyStringCases = ['', 'apple', 'application']
// output: ''
```

ex 4:
```js
const singleStringCase = ['javascript']
// output: 'javascript' // 只有一個 string 輸出本身
```

## 思路
先用 strs[0] 當作第一個 prefixStr，之後每次比對 prefixStr 跟後面字串的一致性，如果有不相等的，就把不相等的部分，利用 ```string.slice(0, index)``` 將其切去，逐漸比對到最後一項，就可以得到最長的前綴字串

## 邊界值
因為是利用 ```strs[0]``` 當作一開始的比對標準，所以需要特別注意當 ```strs[0]``` 為空的狀態，須設定一個邊界條件，當 ```strs[0]``` 為空的直後直接回傳 ```''```

## 解法
```js
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
```