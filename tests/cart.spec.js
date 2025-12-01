import { test, expect } from '@playwright/test';

test('login cart', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/ecommerce/login');

  await page.locator('//input[@id="email"]').fill('test@qabrains.com');
  await page.locator('//input[@id="password"]').fill('Password123');
  await page.locator("//button[text()='Login']").click();
  // await page.waitForTimeout(3000);
  await expect(page).toHaveURL('https://practice.qabrains.com/ecommerce');
  //order collected picklist
  //await page.locator('//button[@type="button" and text()="Z to A (Descending)"]').click();
  await page.locator("(//button[@type='button'][text()='Add to cart'])[1]").click();
  await page.locator("(//button[@type='button'][text()='Add to cart'])[2]").click();
  await page.locator("//span[@class='text-[20px] sm:text-[28px] cursor-pointer relative'][1]").click();
  //for back contuniue shoping button
  //await page.locator('//button[@class="flex items-center gap-2 text-black cursor-pointer"]').click();
  await page.locator('//button[@class="flex items-center gap-2 bg-qa-clr hover:bg-blue-600 transition duration-300 ease-in-out text-white px-6 py-2 rounded-3xl cursor-pointer"]').click();
  await expect(page.locator("//input[@value='test@qabrains.com']")).toHaveValue('test@qabrains.com');
  await page.locator("//input[@placeholder='Ex. John']").fill('Sohan');
  await page.locator('//input[@placeholder="Ex. Doe"]').fill('sharma');    
  await page.locator("//input[@value='1207']").fill('1234');
  await page.locator('//button[@class="flex items-center gap-2 bg-qa-clr hover:bg-blue-600 transition duration-300 ease-in-out text-white px-6 py-2 rounded-3xl cursor-pointer"]').click(); 
  await expect(page.locator("//h4[text()='Price Total:']")).toContainText('Price Total:');
  await expect(page.locator('//button[@class="flex items-center gap-2 bg-qa-clr hover:bg-blue-600 transition duration-300 ease-in-out text-white px-8 py-2 rounded-3xl cursor-pointer"]')).toBeVisible();   
  await page.locator('//button[@class="flex items-center gap-2 bg-qa-clr hover:bg-blue-600 transition duration-300 ease-in-out text-white px-8 py-2 rounded-3xl cursor-pointer"]').click();
  await expect(page.locator('//h3[@class="text-lg uppercase font-black font-oswald mb-4"]')).toHaveText('Thank you for your order!');

}); 
