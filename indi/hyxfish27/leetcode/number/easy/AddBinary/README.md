# Add Binary

## 題目說明
leetcode: https://leetcode.com/problems/add-binary/

Given two binary strings ```a``` and ```b```, return their sum as a binary string.
給定兩個二進位數字 a 以及 b，計算他們的二進制和

## 思路
1. 使用 Functional Programming 的概念，先定義 function ```power``` 是回傳以 ```base``` 為底，```exp``` 為指數的值，這次的題目使用了 ```base2(exp)``` 來計算以 2 為底的指數值
    
    ex:

    ```js
    const power = (base) => (exp) => {
      return base ** exp
    }

    const base2 = power(2)
    const base5 = power(5)

    console.log(base2(2)) // 4
    console.log(base2(3)) // 8
    console.log(base5(2)) // 25
    console.log(base5(3)) // 125
    ```
2. binaryToDecimal 
     
    分別把 ```a``` 跟 ```b``` 轉成 decimal 後再計算兩者的和

    ```js
    const binaryToDecimal = (binary) => {
      let decimal = 0
      for (let i = 0; i < binary.length; i++) {
        decimal += binary[i] * base2(binary.length - 1 - i)
      }
      return decimal
    }
    ```
3. decimalToBinary

    把相加的結果再轉回 binary

    ```js
    const decimalToBinary = (decimal) => {
      return decimal.toString(2)
    }

    let twoSum = 0
    
    twoSum = decimalToBinary(
      binaryToDecimal(a) + binaryToDecimal(b)
    )
    ```


## 踩到的坑
<b>大數轉換的時候會出現精度丟失的問題</b>

由於 Javascript 在運算數字時有一個最大安全值，可以由 ```Number.MAX_SAFE_INTEGER``` 看到其數值為 ```2^53-1```，也就是 ```9007199254740991```

```js
console.log(Number.MAX_SAFE_INTEGER) 
// 9007199254740991
```

一旦超過最大安全值，進行四則運算時便有可能因為精度的問題，造成數值遺失的情況

---
而在此處情境中，a 和 b 的數值都超過了 2^53-1 
```js
a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"

// 科學記號: 2.484789315402498e+28
// 實際值: 24847893154024981730169397005
```

```js
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

// 科學記號: 5.2670055459872975e+29
// 實際值: 526700554598729746900966573811
```
計算時會把科學記號後面的數字省略並且帶 0，造成計算結果跟實際數值出現落差

---

### 解決方法

大小會超過 2^53-1 的數字，改用 BigInt，然後因為 BigInt 無法同時跟 Number 做計算，所以需要有參與運算的值全部做 BigInt 轉換
```js
const binaryToDecimal = (binary) => {
  let decimal = BigInt(0) // 轉成 BigInt

  for (let i = 0; i < binary.length; i++) {
    decimal += 
      BigInt(binary[i]) * // 轉成 BigInt
      BigInt(base2(binary.length - 1 - i)) // 轉成 BigInt
  }

  return decimal
}
```

## 參考資料
[[Huli's Blog] 使用 JavaScript 的數字時的常見錯誤](https://blog.huli.tw/2022/03/14/javascript-number/)

[[MDN] BigInt](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/BigInt)