import { test } from "@playwright/test";

// this will override fullyParallel to false, only for this file
test.describe.configure({ mode: 'serial' });

test.describe('Run all tests in SERIAL mode', () => {

  test("1 serial", async ({ page }, testInfo) => {
    console.log(`test.name: ${testInfo.title} | spec.file.name: ${testInfo.titlePath[0]} | worker :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("2 serial", async ({ page }, testInfo) => {
    console.log(`test.name: ${testInfo.title} | spec.file.name: ${testInfo.titlePath[0]} | worker :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("3 serial", async ({ page }, testInfo) => {
    console.log(`test.name: ${testInfo.title} | spec.file.name: ${testInfo.titlePath[0]} | worker :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

});