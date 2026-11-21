import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Relative base so the build works at https://<user>.github.io/<repo>/ without hard-coding the repo name.
  base: './',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
