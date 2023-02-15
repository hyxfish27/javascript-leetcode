/**
 * addBinary
 * @author hyxfish27
 * @param {string} a
 * @param {string} b
 * @return {string} twoSum
 * @desc 給定兩個 binary a, b，計算他們的二進制和
 */
export const addBinary = function (a, b) {
  let twoSum = 0

  const power = (base) => (exp) => {
    return base ** exp
  }

  const base2 = power(2)

  /**
   * binaryToDecimal
   * @param {string} binary
   * @returns {BigInt} decimal
   * @desc binary 轉 decimal
   */
  const binaryToDecimal = (binary) => {
    let decimal = BigInt(0)
    for (let i = 0; i < binary.length; i++) {
      decimal +=
        BigInt(binary[i]) *
        BigInt(base2(binary.length - 1 - i))
    }
    return decimal
  }

  /**
   * decimalToBinary
   * @param {BigInt} decimal
   * @returns {string}
   * @desc decimal 轉 binary
   */
  const decimalToBinary = (decimal) => {
    return decimal.toString(2)
  }

  twoSum = decimalToBinary(binaryToDecimal(a) + binaryToDecimal(b))

  return twoSum
}
