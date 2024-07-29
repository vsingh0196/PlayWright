//const {test, expect} = require('@playwright/test');
const { chromium } = require('playwright');
import {test,expect} from '@playwright/test';

test('Login Page', async({page})=>{
    await page.goto('https://selectorshub.com/iframe-in-shadow-dom/');
    await page.locator("#username").getByPlaceholder('Enter pizza name').fill('demo');
    page.close()

})