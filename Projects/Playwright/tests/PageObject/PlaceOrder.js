import { expect } from "@playwright/test";
class PlaceOrder{

constructor(page)
{
this.page = page;
this.title = page.getByText(' Payment Method ');
this.cardNo = page.getByText('Credit Card Number').locator('xpath=following-sibling::input');
this.cvv = page.getByText('CVV Code ?').locator('xpath=following-sibling::input');
this.expiryDate = page.locator('select').first();
this.expiryMonth = page.locator('select').nth(1);
this.name = page.getByText('Name on Card').locator('xpath=following-sibling::input');
this.country = page.getByPlaceholder("Select Country");
this.selectCountry = page.getByRole("button",{name :"India"});
this.pOrder = page.getByText("PLACE ORDER");
this.textVisible = page.getByText(' Thankyou for the order. ');


}

async orderDetails()
{
  await expect(this.title).toBeVisible();
}
async cardDetails(cardNumber,CVV,Name)
{
  await this.cardNo.fill(cardNumber);
  await this.cvv.fill(CVV);
  await this.expiryDate.selectOption('02');
  await this.expiryMonth.selectOption('08');
  await this.name.fill(Name);
  await this.country.pressSequentially("ind");
   await this.selectCountry.nth(1).click();
   await this.pOrder.click();
   await expect(this.textVisible).toBeVisible();
}
 





}


module.exports = {PlaceOrder};