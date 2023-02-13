import { pangram } from '@leetcode/string/easy/Pangram/pangram'
import { describe, it, expect } from 'vitest'

const pangramCases = [
  'the quick brown fox jumps over a lazy dog.',
  'two driven jocks help fax my big quiz.'
]

const nonPangramCases = [
  'abcdefghijklmnopq', // 沒有全部字母
  'leetcode'
]

describe('Pangram Test Cases', () => {
  it('should pass if every alphabet exists in the sentence', () => {
    pangramCases.forEach(i => expect(pangram(i)).toBe(true))
  })

  it('should NOT pass if the sentence does not include all alphabet', () => {
    expect(pangram(nonPangramCases[0])).toBe(false)
  })

  it('should NOT pass if the length of the sentence is over 1000', () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let longStr = ''
    for (let i = 0; i < 1001; i++) {
      longStr += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    expect(pangram(longStr)).toBe(false)
  })
})
