import { longestCommonPrefix } from '@leetcode/string/easy/LongestCommonPrefix/LongestCommonPrefix'
import { describe, it, expect } from 'vitest'

const successStringCases = ['flower', 'flow', 'flight']

const failedStringCases = ['dog', 'racecar', 'car']

const emptyStringCases = ['', 'apple', 'application']

const singleStringCase = ['javascript']

describe('Logest Common Prefix Test Cases', () => {
  it('should pass if return sub string when there has matched sub string', () => {
    expect(longestCommonPrefix(successStringCases)).toBe('fl')
  })

  it('should pass if return empty string when no matched sub string', () => {
    expect(longestCommonPrefix(failedStringCases)).toBe('')
  })

  it('should pass if return empty string when includes empty data', () => {
    expect(longestCommonPrefix(emptyStringCases)).toBe('')
  })

  it('should pass if return the first string when includes only one data', () => {
    expect(longestCommonPrefix(singleStringCase)).toBe('javascript')
  })
})
