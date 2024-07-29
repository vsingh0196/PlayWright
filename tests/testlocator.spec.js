import { chromium,test } from "@playwright/test";

test.use({ viewport: { width: 1400, height: 1000 } });
test('Launch the Selectors hub test page',async()=>{

   
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/");
    await page.waitForSelector('.elementor-widget-container',{
        state: "visible"
    });
    await page.locator("#userName").getByPlaceholder("enter name").fill("kancha cheena");
    //await page.locator('#userName input#pizza').fill('Mozarella'); 
 
    await page.locator("#userName").getByPlaceholder('Enter pizza name').fill('demo');


 await page.waitForTimeout(5000);
  
});