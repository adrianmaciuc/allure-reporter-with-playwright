
import { test } from "@playwright/test";

test.describe('full PARALLEL mode', () => {

  test("1 parallel", async ({ page }, testInfo) => {
    console.log(`test name: ${testInfo.title} | parallel index :${testInfo.parallelIndex} | shard index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("2 parallel", async ({ page }, testInfo) => {
    console.log(`test name: ${testInfo.title} | parallel index :${testInfo.parallelIndex} | shard index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("3 parallel", async ({ page }, testInfo) => {
    console.log(`test name: ${testInfo.title} | parallel index :${testInfo.parallelIndex} | shard index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("4 parallel", async ({ page }, testInfo) => {
    console.log(`test name: ${testInfo.title} | parallel index :${testInfo.parallelIndex} | shard index: ${JSON.stringify(testInfo.config.shard)}`)
  });

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
