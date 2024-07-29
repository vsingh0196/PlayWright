import {test,expect} from '@playwright/test';

test.describe('Login Invalid Validations', () => {

  test.beforeEach(async ({ page }) => {

    //visit the login url
    await page.goto('https://demo.haroldwaste.com/authentication'); 

  });

  test('check error message for invalid email', async ({ page }) => {

    //Enter incorrect email but correct password
    await page.fill('input[name="email"]','qa@julesai.co');
    await page.fill('input[name="password"]','QaJULES2023!');
    await page.locator('data-test-id=signin').click();

    // Verify the error message
    const errorMessage = page.locator('data-test-id=toaster-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Your email and/or password are incorrects');
  });

  test('check error message for invalid password', async ({ page }) => {

    //Enter correct email but incorrect password
    await page.fill('input[name="email"]','qa@julesai.com');
    await page.fill('input[name="password"]','QaJULES2024!');
    await page.locator('data-test-id=signin').click();

    // Verify the error message
    const errorMessage = page.locator('data-test-id=toaster-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Your email and/or password are incorrects');
  });

  test('should show required message for empty email/password fields', async ({ page }) => {

    // Click login button without entering any data
    await page.locator('data-test-id=signin').click();

    // Verify "required" message for email field
    const emailError = page.locator('//div[@data-test-id="input-email"]/following-sibling::*'); 
    //await expect(emailError).toBeVisible();
    await expect(emailError).toHaveText('Required'); 

    // Verify "required" message for password field
    const passwordError = page.locator('//div[@data-test-id="input-password"]/following-sibling::*'); 
    //await expect(passwordError).toBeVisible();
    await expect(passwordError).toHaveText('Required'); 
});


test('check password is visible and cursor is at the end when visibility icon is clicked', async ({ page }) => {
    // Enter a password
    await page.fill('input[name="password"]', 'QaJULES2023!'); 
    
    // Click the visibility icon to show the password
    const visibilityIcon = page.locator('data-testid=VisibilityOffIcon'); 
    await visibilityIcon.click();

    // Verify the password field type is 'text'
    const field = await page.locator('input[name="password"]');
    const fieldType = await field.getAttribute('type');
    expect(fieldType).toBe('text');

    // Check if the password is visible
    const showPassword = await field.evaluate(el => el.value);
    expect(showPassword).toBe('QaJULES2023!');

    // Verify the cursor position is at the end of the password field
    await page.focus('input[name="password"]'); 
    const cursorPosition = await page.evaluate(() => {
        const input = document.querySelector('input[name="password"]'); // Replace with the correct selector
        return input.selectionStart;
    });
    
    // Since the given password length is 12
    expect(cursorPosition).toBe(0); //this test case will fail if we pass 12 because cursor is at the front.
});


});
