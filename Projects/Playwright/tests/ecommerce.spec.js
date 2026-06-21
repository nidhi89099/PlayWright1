import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page .getByPlaceholder('email@example.com').fill('nidhigoel2010@gmail.com');
     await page.getByPlaceholder('enter your passsword').fill('Qa@12345');
  await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('paragraph',{name : 'Automation Practice'}).isVisible();
//await page.getByRole('l',({name: 'Add to Cart'}).nth(2).click());
await page.getByRole('listitem',{name:'Add to Cart'}).nth(1).click();
});