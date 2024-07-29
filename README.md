# Playwright

This repository contains automated tests for Login validation using Playwright.

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Node.js includes npm (Node Package Manager). You can verify its installation by running `npm -v` in your terminal.

## Getting Started

Follow these steps to set up the project and execute the tests:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/vsingh0196/playwright.git
cd playwright
```
### 2. Install Dependencies
Install the required dependencies:

```bash
npm install
npx playwright install
```
This will install Playwright and other necessary packages specified in the package.json file.

### 3. Running the Tests
To execute the tests, use the following command:

```bash
npx playwright test loginPage.spec.js --project=chromium --headed
npx playwright test loginValidation.spec.js --project=chromium --headed
npx playwright test loginInvalidValidation.spec.js --project=chromium --headed
```
This will execute the tests one by one.
or 
```bash
npx playwright test tests/loginPage.spec.js tests/loginValidation.spec.js tests/loginInvalidValidation.spec.js --project=chromium --headed
```
This will execute all the test files altogether.
