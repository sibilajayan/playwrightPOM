class Dashboard
{
    constructor(page){
        this.page = page;
        this.addtocart1 = page.locator("#add-to-cart-sauce-labs-backpack");
        this.addtocart2 = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.addtocart3 = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.addtocart4 = page.locator("#add-to-cart-sauce-labs-fleece-jacket");
        this.removeitem = page.locator("#remove-sauce-labs-backpack")
        

    }

    async additem(){

        await this.addtocart1.click();
        await this.addtocart2.click();
        await this.addtocart3.click();
        await this.addtocart4.click();
        
        
      

    };
    async removeitems(){
        await this.removeitem.click();

    }
};
module.exports = Dashboard;//to export