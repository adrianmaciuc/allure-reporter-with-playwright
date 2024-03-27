
import { test } from "@playwright/test";

test.describe('full PARALLEL mode', () => {

  test("5 parallel", async ({ page }, testInfo) => {
    console.log(`test name: ${testInfo.title} | parallel index :${testInfo.parallelIndex} | shard index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("6 parallel", async ({ page }, testInfo) => {
    console.log(`test name: ${testInfo.title} | parallel index :${testInfo.parallelIndex} | shard index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("7 parallel", async ({ page }, testInfo) => {
    console.log(`test name: ${testInfo.title} | parallel index :${testInfo.parallelIndex} | shard index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("8 parallel", async ({ page }, testInfo) => {
    console.log(`test name: ${testInfo.title} | parallel index :${testInfo.parallelIndex} | shard index: ${JSON.stringify(testInfo.config.shard)}`)
  });

});
