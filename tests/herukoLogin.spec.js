import {test, expect} from '@playwright/test';

test('herokuapp login test', async ({page})=>{ 
   await page.goto('https://the-internet.herokuapp.com/login'); 
   await page.locator('#username','tomsmith');
   await page.locator('//input[@id=password]','SuperSecretPassword!');
   await page.getByRole('button',{ name:'Login'}).click();
}); 
