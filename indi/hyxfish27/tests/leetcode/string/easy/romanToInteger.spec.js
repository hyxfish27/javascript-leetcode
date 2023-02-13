import { romanToInteger } from '@leetcode/string/easy/RomanToInteger/romanToInteger'
import { describe, it, expect } from 'vitest'

describe('Roman To Integer Test Cases', () => {
  it('should pass if III is equal to 3', () => {
    expect(romanToInteger('III')).toBe(3)
  })

  it('should pass if LVIII is equal to 58', () => {
    expect(romanToInteger('LVIII')).toBe(58)
  })

  it('should pass if MCMXCIV is equal to 1994', () => {
    expect(romanToInteger('MCMXCIV')).toBe(1994)
  })

  it('should pass if roman is null or undefined or empty', () => {
    expect(romanToInteger(null)).toBe(0)
    expect(romanToInteger(undefined)).toBe(0)
    expect(romanToInteger('')).toBe(0)
    expect(romanToInteger({})).toBe(0)
  })
})
