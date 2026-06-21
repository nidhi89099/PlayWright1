const { expect } = require('@playwright/test');
class Login{

  constructor(page)
  {
    this.page = page;
    this.email = page.locator('#userEmail')
    this.password = page.locator('#userPassword');
    this.loginButton = page.getByRole('button', { name: 'login' });
   this.textVisible1 = page.getByText('Automation Practice');
   this.addToCart = page.getByRole('button', {name:'Add to Cart'});
   this.cart = page.getByText('Cart 1');
       
  }

   async UserLogin(email, password)
  {

    await this.email.fill(email);
     await this.password.fill(password);
     await this.loginButton.click();
     await expect(this.textVisible1).toBeVisible(); 
     await this.addToCart.nth(1).click();
     await this.cart.click();
    
    
   }

}
module.exports ={Login};