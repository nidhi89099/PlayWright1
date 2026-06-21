import { test } from '@playwright/test';
const { Login } = require('../tests/PageObject/Login.js');
const { Home } = require('../tests/PageObject/Home.js');
const {PlaceOrder} = require('../tests/PageObject/PlaceOrder.js');

const url = 'https://rahulshettyacademy.com/client/#/auth/login';

test('logIn', async ({ page }) => {
  const login1 = new Login(page);
  const placeOrder=new PlaceOrder(page);

  await page.goto(url);
  await login1.UserLogin('nidhigoel2010@gmail.com', 'Qa@12345');

  const home = new Home(page);
  await home.HomePage();
  await placeOrder.orderDetails();
  await placeOrder.cardDetails('1234567', '111', 'Abc'); 
});