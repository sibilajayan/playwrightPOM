class Cart
{
    constructor(page){
        this.page = page;
        this.cart1 = page.locator(".shopping_cart_link");
        // this.icon = expect(page.locator('.shopping_cart_badge'));
        this.remove1 = page.locator("#remove-sauce-labs-bolt-t-shirt");
        // this.icon1 = expect(page.locator('.shopping_cart_badge'));
        this.remove2 = page.locator("#remove-sauce-labs-bike-light");
        
    }

    async cartpage(){
      await this.cart1.click();
    //   await this.icon.toHaveText('4');
      await this.remove1.click();
    //   await this.icon1.toHaveText('3');
      await this.remove2.click();
      // await this.checkout.click();
      // await this.cancel.click();

    };
};
module.exports = Cart;
