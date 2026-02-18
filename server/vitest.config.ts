import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    globalSetup: "./tests/setup.ts",
    include: ['tests/**/*.{test,spec}.ts'],
    env: {
      NODE_ENV: "test"
    },
    reporters: ['default'],
  },
});