import { test, expect } from '@playwright/test';
  async function gotoBooking(page) {   
  await page.goto('https://eventhub.rahulshettyacademy.com/');
  await expect(page).toHaveTitle('EventHub — Discover & Book Events');
  await page.getByLabel('Email').fill('g.nidhi2015@gmail.com');
  await page.getByLabel('Password').fill('Qa@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Logout').isVisible();
}
test('has title', async ({ page }) => {
  await gotoBooking(page);
  await page.getByTestId('book-now-btn').first().click();
  await page.getByLabel('Full Name').fill('Nidhi');
  await page.getByLabel('Email').fill('g.nidhi2015@gmail.com');
  await page.getByLabel('Phone').fill('1234567890');
  await page.getByText('Confirm Booking').click();
  await page.getByText('Booking Confirmed!').isVisible();
  await page.getByRole('link',{name:'View My Bookings'}).click();
  await page.getByRole('button',{name:'View Details'}).first().click();
  await page.getByText('View and manage all your ticket bookings').isVisible();
  await page.getByRole('button', { name: 'Cancel Booking' }).first().click();
  
});