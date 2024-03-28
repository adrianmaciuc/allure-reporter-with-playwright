import { test } from "@playwright/test";

test.describe('FIRST SUITE', () => {

  test("1 parallel", async ({ page }, testInfo) => {
    console.log(`file.name: ${testInfo.titlePath[0]} | describe: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("2 parallel", async ({ page }, testInfo) => {
    console.log(`file.name: ${testInfo.titlePath[0]} | describe: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("3 parallel", async ({ page }, testInfo) => {
    console.log(`file.name: ${testInfo.titlePath[0]} | describe: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("4 parallel", async ({ page }, testInfo) => {
    console.log(`file.name: ${testInfo.titlePath[0]} | describe: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

});

test.describe('SECOND SUITE', () => {

  test("5 parallel", async ({ page }, testInfo) => {
    console.log(`file.name: ${testInfo.titlePath[0]} | describe: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("6 parallel", async ({ page }, testInfo) => {
    console.log(`file.name: ${testInfo.titlePath[0]} | describe: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("7 parallel", async ({ page }, testInfo) => {
    console.log(`file.name: ${testInfo.titlePath[0]} | describe: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

  test("8 parallel", async ({ page }, testInfo) => {
    console.log(`file.name: ${testInfo.titlePath[0]} | describe: ${testInfo.titlePath[1]} | test.name: ${testInfo.title} | worker_id :${testInfo.parallelIndex} | shard.index: ${JSON.stringify(testInfo.config.shard)}`)
  });

});