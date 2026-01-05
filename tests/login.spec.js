import { test, expect } from '@playwright/test';


test('valid login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username','student');
  await page.fill('#password','Password123'); 
  await page.getByRole('button', { name: 'Submit' }).click(); 

  //have url
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

  const successMessage = page.locator('text=/Congratulations|successfully logged in/i');
  await expect(successMessage).toBeVisible(); 

   
  const logoutButton = page.locator('button:has-text("Log out")');
  //await expect(logoutButton).toBeVisible();
});

test('should show error for invalid username', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username','incorrectUser');
  await page.fill('#password','Password123'); 
  await page.getByRole('button', { name: 'Submit' }).click(); 

    const errorMessage = page.locator('#error');
    await expect(errorMessage).toHaveText('Your username is invalid!');


  });

  test('should show error for invalid password', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username','student');
  await page.fill('#password','incorrectPassword'); 
  await page.getByRole('button', { name: 'Submit' }).click();

    const errorMessage = page.locator('#error');
    await expect(errorMessage).toHaveText('Your password is invalid!');

    
  });
