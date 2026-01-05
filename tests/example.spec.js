// @ts-check
import { test, expect, _baseTest,devices} from '@playwright/test';
import { request } from 'http';
// test.use({ ...devices['Pixel 5'] });

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('/Playwright/');
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('footer is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Check that the footer is visible
  await expect(page.locator('footer')).toBeVisible();
});

test('can fetch data from  API', async ({ request,page }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  console.log(data);
  console.log(response.status());
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('title');
});

//Post API
test('post from API', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
        data: {
            'name': 'Rohan',
            'job': 'monu',
        },
        headers: {
            'Content-Type': 'application/json',
            'x-api-key':'reqres-free-v1' 
        }
    });

    //console.log('Response:', response.status());
    expect(response.status()).toBe(401);

    
    const responseBody = await response.json();
    console.log('Response:', responseBody);
    //  expect(responseBody).toHaveProperty('name', 'Rohan'); 
});

test('to delete from API',async ({request})=>{
  const Response = await request.delete('https://reqres.in/api/users/2',{
    headers:{
       'Content-Type': 'application/json',
        'x-api-key':'reqres-free-v1'
    }
  });
  console.log(Response.status());
});

test('post status 201',async({page})=>{
    page.goto('https://reqres.in/');
    // await page.locator("//li[@data-id='delete']").click();
    await page.waitForTimeout(2000);
    
    const responsePromise = page.waitForResponse(response => 
      response.url()==='https://reqres.in/api/users/2' && response.status() === 204
    );
    
    await page.locator("//li[@data-id='delete']").click(); 
    
    const response = await responsePromise;
    
    
    console.log(response.status());
});
