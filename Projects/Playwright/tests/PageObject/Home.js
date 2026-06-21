import { expect } from '@playwright/test';

class Home {
  constructor(page) {
    this.page = page;
    this.textVisible2 = page.getByText('ZARA COAT 3');
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.getByText('ORDERS');
    this.buyProduct = page.getByText('Buy Now');
  }

  async HomePage() {
    await expect(this.textVisible2).toBeVisible();

    await this.cart.click();
    //await this.orders.click();
    await this.buyProduct.click();
  }
}

module.exports = { Home };