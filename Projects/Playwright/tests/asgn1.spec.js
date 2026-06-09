import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await expect(page).toHaveTitle('ProtoCommerce');
  await page.getByLabel('Check me out if you Love IceCreams!').click();
  await page.getByLabel('Employed').click();
  await page.getByLabel('Gender').selectOption('Female');
  await page.getByLabel('Password').fill('223344');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Success!').isVisible();
  await page.getByRole('link',{name:'Shop'}).click();
  await page.getByRole('heading', { name: 'Shop Name' }).isVisible();
});