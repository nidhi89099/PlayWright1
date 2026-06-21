import {test, expect} from '@playwright/test';
const{LoginPage} = require('../tests/PageObject/LoginPagePO.js');
const url = 'https://rahulshettyacademy.com/client/#/auth/login';

test('login', async ({page}) => {
  const loginPage  = new LoginPage(page);
  await page.goto(url);
  await loginPage.ValidLogin('nidhigoel2010@gmail.com','Qa@12345'); 
});

