import { test, expect } from "@playwright/test";

// this will override fullyParallel to false, only for this file
test.describe.configure({ mode: 'serial' });

test.describe('Run all tests in SERIAL mode', () => {
  test.beforeAll('beforeAll SERIAL mode', () => {
    console.log("I am executed in beforeAll hook from SERIAL mode")
  });
  test.beforeEach('beforeEach SERIAL mode', () => {
    console.log("I am executed in beforeEach hook from SERIAL mode")
  });

  test("Check redirect to what-is-new page", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.getByTestId("ui-id-3").click();
    await expect(page).toHaveURL(/what-is-new/);
  });

  test("Check redirect to women page", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.getByTestId("ui-id-4").click();
    await expect(page).toHaveURL(/women/);
  });

  test("Fail Intentionally - Check redirect to men page", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.getByTestId("ui-id-5").click();
    await expect(page).toHaveURL(/men1/);
  });

});