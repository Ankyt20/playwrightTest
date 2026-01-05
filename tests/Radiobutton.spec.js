import { test,expect } from '@playwright/test';

test('radio button',async({page}) =>{
    await page.goto('https://demoqa.com/radio-button');
    await page.locator('//label[@for="yesRadio"]').check();
    // page.waitForTimeout(4000);
}); 

test('webtabels',async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    await expect(page.locator('//button[@id="addNewRecordButton"]')).toBeVisible();
    //For add new record in table
    await page.locator('//button[@id="addNewRecordButton"]').click();
    await page.locator('//button[@class="close"]').click();
    await page.locator('//input[@id="searchBox"]').click();
    await page.locator('//div[text()="Alden"]/following::div[7]/span[2]').click();
    //We can use "following" keyword also as ansector but for downward indexing for click on delete icon
    //await page.locator('//div[text()="Cierra"]/following::span[@id="delete-record-1"]').click();
    //await page.locator('//span[@id="edit-record-1"]').nth().click();
    await page.locator('//span[@id="edit-record-1"]').click();
    await page.locator('//button[@class="close" and @type="button"]').click()
});

test('doubleclick buttons',async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    await expect(page.locator("//h1[text()='Buttons']")).toHaveText('Buttons');
    //For add new record in table
    await page.locator('//button[@id="doubleClickBtn"]').dblclick();
    await expect(page.locator('//p[@id="doubleClickMessage"]')).toContainText('You have done a double click');
    //for right click only
    await page.locator('//button[@id="rightClickBtn"]').click({button:'right'}); 
    await expect(page.locator('//p[@id="rightClickMessage"]')).toContainText('You have done a right click');


});
test('links open',async({page})=>{
    await page.goto('https://demoqa.com/links');
    await page.locator('//a[@id="simpleLink"]').click(); 
    const page1Promise = page.waitForEvent('popup');
    await page.locator('//img[@src="/images/Toolsqa.jpg"]').click();
    const page1 = await page1Promise;
    await page1.waitForLoadState();
    //await expect(page1.locator('//img[@src="/images/Toolsqa.jpg"]')).toBeVisible();
    // /**
    //  * Waits for an HTTP response that contains 'created' in its URL.
    //  * This promise will resolve when the network request matching the criteria completes.
    //  * @type {Promise<Response>}
    //  */
    // const responsePromise = page.waitForResponse(response => response.url().includes('created'));
    // await page.waitForSelector("//a[@id='created']");
    // await page.locator("//a[@id='created']").click();
    // await page.locator("(//a[text()='Created'])[1]").click();
    // const response = await responsePromise;
    // console.log(response.status());
});

test('upload file',async({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    await page.locator('//input[@id="uploadFile"]').setInputFiles('uploadFile/playwright features.txt');
    await page.waitForTimeout(1000);
    //suggstedfilename() is used to check the validate the file specific file was download and create const variable for download the event
    const downloadPromise = page.waitForEvent('download');
    await page.locator('//a[@id="downloadButton"]').click();
    
    // await page.waitForTimeout(1000);
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('sampleFile.jpeg');
    await page.waitForTimeout(3000);
    
});
test('dynamic properties',async({page}) => {
    await page.goto('https://demoqa.com/dynamic-properties');
    await expect(page.locator('//button[@id="enableAfter"]')).toBeEnabled({timeout:4000});
    await expect(page.locator('//button[@id="visibleAfter"]')).toBeVisible({visible:true,timeout:4000});
});
test('alerts',async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    await page.waitForTimeout(4000);
    await page.once('dialog', async dialog => {
        // await page.screenshot({ path: 'screenshots/popupScreenshot.png',fullPage:true});
        await dialog.accept(); 
        
    });
    // await page.screenshot({ path: 'screenshot.png'});
    
    //   await page.waitForTimeout(2000);
    //     await page.screenshot({ path: 'screenshots/popupScreenshot.png',fullPage:true}); 
    await page.waitForTimeout(4000);  
    await page.locator('//button[@id="alertButton"]').click();
     await page.waitForTimeout(4000);
    
    // await page.screenshot({ path: 'screenshots/popupScreenshot.png',fullPage:true});
    
    // await page.waitForTimeout(3000);\ page.on('dialog', dialog => dialog.accept());
    

    
    
    // page.once('dialog',dialog => dialog.accept());
    // await page.locator('//button[@id="timerAlertButton"]').click();
    // await page.waitForTimeout(6000);
    // await page.screenshot({ path: 'loginTest/tests/screenshots'});
    
    
});
test('checkbox buttons',async({page})=>{
    await page.goto('https://demoqa.com/checkbox');
    // page.locator('//button[@class="rct-collapse rct-collapse-btn"]').click();
    await page.locator("(//button[@title='Toggle'])[1]").click();
    await page.locator("(//button[@title='Toggle'])[2]").click();
    await page.locator('//label[@for="tree-node-commands"]').check();
    // await page.waitForTimeout(4000)
    await page.locator("(//button[@title='Toggle'])[3]").click();
    await page.locator('//label[@for="tree-node-office"]').check();
    // await page.waitForTimeout(4000);
    await page.locator("(//button[@title='Toggle'])[6]").click();
    await page.locator('//label[@for="tree-node-wordFile"]').check();
    await page.waitForTimeout(4000); 

});
