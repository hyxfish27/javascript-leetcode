/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'indi/hyxfish27',
  test: {
    include: ['**/*.spec.[t|j]s'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    environment: 'node'
  }
})
