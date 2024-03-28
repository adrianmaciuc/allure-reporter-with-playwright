
import { test } from "@playwright/test";

test.describe('full PARALLEL', () => {

  test("9 parallel", async ({ page }, testInfo) => {
    console.log(`spec.file.name: ${testInfo.titlePath[0]} | test.suite: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("10 parallel", async ({ page }, testInfo) => {
    console.log(`spec.file.name: ${testInfo.titlePath[0]} | test.suite: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("11 parallel", async ({ page }, testInfo) => {
    console.log(`spec.file.name: ${testInfo.titlePath[0]} | test.suite: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("12 parallel", async ({ page }, testInfo) => {
    console.log(`spec.file.name: ${testInfo.titlePath[0]} | test.suite: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

});
