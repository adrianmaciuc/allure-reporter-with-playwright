Welcome to the Playwright Test Framework example using Allure Reporter and history backup at AWS S3 Buckets

This project, created by (Adrian Maciuc)[https://martioli.com/] - showcases a Playwright-based testing framework with focus on paralellisation. 


## 📝 Overview

This project includes:

1️⃣ Workflow to trigger a run in Github Actions on demand

2️⃣ Fake tests created just to showcase both parallel and serial modes

3️⃣ Integration with AWS S3 Bucket to store and fetch history and trends for Allure Reporter


## Installation

🚀 To get the project running on local, simply follow these steps:

1️⃣ Clone the project

2️⃣ Run `npm install`

3️⃣ Install latest Java [don't forget to restart after installation to get JAVA_HOME into path]

4️⃣ Run `npx allure generate` to generate the report based on the results

5️⃣ Run `npx allure open` to open the report generated and stored in `allure-report` folder

## Github Actions

🚀 To get the project for CI, use `.github/workflows/playwright-allure.yml` as guidance
