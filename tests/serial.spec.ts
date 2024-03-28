import { test } from "@playwright/test";

// this will override fullyParallel to false, only for this file
test.describe.configure({ mode: 'serial' });

test.describe('SERIAL suite', () => {

  test("1 serial", async ({ page }, testInfo) => {
    console.log(`spec.file.name: ${testInfo.titlePath[0]} | test.suite: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("2 serial", async ({ page }, testInfo) => {
    console.log(`spec.file.name: ${testInfo.titlePath[0]} | test.suite: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("3 serial", async ({ page }, testInfo) => {
    console.log(`spec.file.name: ${testInfo.titlePath[0]} | test.suite: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

});