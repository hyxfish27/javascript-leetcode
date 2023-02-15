import { addBinary } from '@leetcode/number/easy/AddBinary/AddBinary'
import { describe, it, expect } from 'vitest'

describe('Add Binary Test Cases', () => {
  it('should pass if a + b = 100', () => {
    const a = '11'
    const b = '1'

    expect(addBinary(a, b)).toBe('100')
  })

  it('should pass if a + b = 10101', () => {
    const a = '1010'
    const b = '1011'

    expect(addBinary(a, b)).toBe('10101')
  })

  it('should pass if big bianry caculate is correct', () => {
    const a = '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101'
    const b = '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'

    expect(addBinary(a, b)).toBe('110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000')
  })
})
