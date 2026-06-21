import { test, expect } from '@playwright/test';
const url = 'https://inspireall.legendonlineservices.co.uk/the_venue/account/login';
test('login', async ({ page }) => {
   await page.goto(url);
  await page.locator('[data-test-id="login-email"]').fill('ashishgoelhr+agrim@gmail.com');
  await page.locator('[data-test-id="login-password"]').fill('JU#a2K@XvyW@Sev');
  await page.locator('[data-test-id="login-submit"]').click();
  await page.locator('[data-test-id="account-bookings-dropins"]').click();
   await expect(page.locator('[data-test-id="shared-header"]')).toBeVisible();
  await page.getByTitle('Remove all items').click();
  await page.getByRole('option', { name: 'Furzefield' }).click();
  await page.getByText('Sports Hall').click();
  await page.getByText('Badminton').click();
  await page.locator('[data-test-id="bookings-viewtimetable"]').click();
  //await page.locator('[data-test-id="shared-dateslider-nextdate"]').click();
  //await page.getByText('May, 2026').click();
  await page.locator('i.fas.fa-calendar-alt:visible').click();
  await page.locator(':text-is("20")').click();
  await page.locator("body > main:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > sportshall-activity-timetable:nth-child(4) > div:nth-child(3) > div:nth-child(12) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click();
 await page.locator('select:visible').click();
});

  