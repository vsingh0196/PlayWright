import {test,expect} from '@playwright/test';

test.describe('Login Page Fields Validation', () => {

    test.beforeEach(async ({page}) => {

        //visit the login url
        await page.goto('https://demo.haroldwaste.com/authentication');
        //Validate the page title is correct
        await expect(page).toHaveTitle('Jules.ai');
        //Validate the url is correct
        await expect(page).toHaveURL('https://demo.haroldwaste.com/authentication');

    });

    //Validate username field
    test('Check if username field is present', async({page})=>{

        const usernameField = await page.locator('data-test-id=input-email');
        await expect(usernameField).toBeVisible();
    
    });

    //Validate password field
    test('Check if password field is present', async({page})=>{

        const passwordField = await page.locator('data-test-id=input-password');
        await expect(passwordField).toBeVisible();
    
    });

    //Validate visibility off icon
    test('Check if Visibility icon is present', async({page})=>{

        const visibilityOff = await page.locator('data-testid=VisibilityOffIcon');
        await expect(visibilityOff).toBeVisible();
    
    });

    //Validate Login Button
    test('Check if Login button is present', async({page})=>{

        const loginButton = await page.locator('data-test-id=signin');
        await expect(loginButton).toBeVisible();
    
    });

    //Validate Microsoft Login Button
    test('Check if Login with Microsoft button is present', async({page})=>{

        const microsoftLoginButton = await page.locator('data-test-id=signinMicrosoft');
        await expect(microsoftLoginButton).toBeVisible();
    
    });

    //Validate Google Login Button
    test('Check if Login with Google button is present', async({page})=>{

        const googleLoginButton = await page.locator('data-test-id=signinGoogle');
        await expect(googleLoginButton).toBeVisible();
    
    });

})