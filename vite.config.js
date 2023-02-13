import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'indi/hyxfish27',
  test: {
    include: ['**/*.spec.[t|j]s'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    environment: 'node'
  },
  resolve: {
    alias: {
      '@leetcode': resolve(__dirname, './indi/hyxfish27/leetcode')
    }
  }
})
