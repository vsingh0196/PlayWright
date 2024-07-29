import {test,expect} from '@playwright/test';

test.describe('Login Validations', ()=>{

    test.beforeEach(async ({page}) => {

        //visit the login url
        await page.goto('https://demo.haroldwaste.com/authentication');

    });

    test('Check if login is successful', async ({ page }) => {

        //Enter valid credentials
        await page.fill('input[name="email"]','qa@julesai.com');
        await page.fill('input[name="password"]','QaJULES2023!');

        //check by default password is masked
        const fieldType = await page.locator('input[name="password"]').getAttribute('type');
        expect(fieldType).toBe('password');

        await page.locator('data-test-id=signin').click();

        //Validate login is successful and naviagte to next page
        await expect(page.locator('.headroom-wrapper>div>div>div:nth-child(2)')).toHaveText('Purchase & Opportunity list');
        await expect(page).toHaveURL('https://demo.haroldwaste.com/purchases');

        await page.click('data-test-id=header-menu'); 
        await page.click('data-test-id=header-logout'); 
        //check if redirectedto the login page
        await expect(page).toHaveURL('https://demo.haroldwaste.com/authentication');

    });

    test('Check if it redirects to Microsoft login page', async ({ page }) => {

        //click on the login with Microsoft button
        await page.click('data-test-id=signinMicrosoft'); 

        await page.waitForTimeout(5000);

        // Verify the redirection URL for Microsoft login
        const currentURL = page.url();
        await expect(currentURL).toContain('https://login.microsoftonline.com');

    });

    test('Check if it redirects to Google login page', async ({ page }) => {

        //click on the login with Microsoft button
        await page.click('data-test-id=signinGoogle'); 
        
        await page.waitForTimeout(5000);

        // Verify the redirection URL for Google login
        const currentURL = page.url();
        await expect(currentURL).toContain('https://accounts.google.com');

    });

})