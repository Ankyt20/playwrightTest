import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  const pricecell=await page.locator("//td[text()='Appium (Selenium) - Mobile Automation Testing from Scratch']/ancestor::tr[1]/td[3]");
  const price = await pricecell.textContent();
  
  console.log(price);
 
});
