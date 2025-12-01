import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.locator('#firstName').fill('Rohan');
  
  await page.locator('#lastName').fill('mehra');
  await page.locator('#userEmail').fill('test@gmail.com');
  //await page.locator('#gender-radio-1').check();
  await page.locator('label[for="gender-radio-1"]').click(); 
  //await page.locator('#gender-radio-2').check();
//   const maleRadio = page.locator('#gender-radio-1'); 
//   await maleRadio.check();
  await page.locator('#userNumber').fill('1234567890');  
  await page.locator('//input[@id="dateOfBirthInput"]').click();
  await page.locator('#dateOfBirthInput').fill('01 Nov 2025');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  //await page.getByRole('option', { name: 'Choose Wednesday, November 12th,' }).click();
  await page.locator('#subjectsInput').fill('test Subject');
  await page.locator('label[for="hobbies-checkbox-1"]').check();
  //await page.locator("//label[.='Male']").check();
  await page.locator('label[for="hobbies-checkbox-2"]').check(); 
  await page.locator('#currentAddress').fill('testAddress');
  await page.locator("//input[@id='uploadPicture']").click();
  // const fileChooser = await fileChooserPromise;
  // await fileChooser.setFiles('C:\Users\Ankit\Documents');
  await page.locator("//input[@id='uploadPicture']").setInputFiles('C:/Users/Ankit/Documents/playwright features.txt'); 
  //await page.waitForTimeout(3000);
  //await page.getByRole('button', { name: 'Select picture' }).setInputFiles('playwright features.txt');   
  
  
 // await page.locator('#uploadPicture');

});

// test('test', async ({ page }) => { 
//   await page.goto('https://demoqa.com/automation-practice-form');
//   await page.getByRole('textbox', { name: 'First Name' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).fill('test');
//   await page.getByRole('textbox', { name: 'Last Name' }).click();
//   await page.getByRole('textbox', { name: 'Last Name' }).fill('ss');
//   await page.getByRole('textbox', { name: 'name@example.com' }).click();
//   await page.getByRole('textbox', { name: 'name@example.com' }).fill('Test@gmail.com');
//   await page.getByText('Male', { exact: true }).click();
//   await page.getByRole('textbox', { name: 'Mobile Number' }).click();
//   await page.getByRole('textbox', { name: 'Mobile Number' }).fill('1234567890');
//   await page.locator('#dateOfBirthInput').click();
//   await page.getByRole('option', { name: 'Choose Wednesday, November 12th,' }).click();
//   await page.locator('#dateOfBirthInput').click();
//   await page.getByRole('option', { name: 'Choose Tuesday, November 11th,' }).click();
//   await page.locator('.subjects-auto-complete__value-container').click();
//   await page.locator('#subjectsInput').fill('Admission');
//   await page.getByText('Sports').click();
//   await page.getByText('Reading').click();
// await page.getByRole('button', { name: 'Select picture' }).click();
//   await page.getByRole('button', { name: 'Select picture' }).setInputFiles('playwright features.txt');
//   await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
//   await page.getByText('NCR', { exact: true }).click();
//   await page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
//   await page.getByText('Delhi', { exact: true }).click();
// });