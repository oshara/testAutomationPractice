import {test} from '@playwright/test';

export const form = ()=>{
test('Form - Form filling',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('[id="name"]').fill('Sam');
    await page.locator('#email').fill('testsam@gmail.com');
    await page.locator('[id="phone"]').fill('0400000000');
    await page.locator('[id="textarea"]').fill('15, Main Street, Melbourne, Australia');
    await page.locator('#male').check();
    await page.locator('[id="sunday"]').check();
    await page.locator('[id="monday"]').check();
    await page.locator('[id="tuesday"]').check();
    await page.locator('[id="wednesday"]').check();
    await page.locator('[id="country"]').selectOption('usa');
    await page.locator('[id="colors"]').selectOption('green');
    await page.locator('[id="datepicker"]').click();
    await page.locator('//a[normalize-space()="29"]').click();



})
}