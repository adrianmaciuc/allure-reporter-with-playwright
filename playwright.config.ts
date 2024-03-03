import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'allure-playwright',
  use: {
    // website under test uses id attributes instead of default data-testid 
    testIdAttribute: 'id',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'x',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
