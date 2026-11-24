class Checkout
{
    constructor(page){
        this.page = page;
        this.checkout   = page.locator("#checkout");
        this.cancel     = page.locator("#cancel");
        this.checkout1  = page.locator("#checkout");
        this.firstname  = page.getByPlaceholder("First Name");
        this.lastname   = page.getByPlaceholder("Last Name");
        this.zip        = page.getByPlaceholder("Zip/Postal Code");
        this.continue   = page.getByRole("button",{name: "Continue"});
        this.cancel1    = page.locator("#cancel");
        this.cart2      = page.locator(".shopping_cart_link");
        this.checkout2  = page.locator("#checkout");
        this.firstname1 = page.getByPlaceholder("First Name");
        this.lastname1  =  page.getByPlaceholder("Last Name");
        this.zip1       =  page.getByPlaceholder("Zip/Postal Code");
        this.continue1  =  page.getByRole("button",{name: "Continue"});
    }
    async checkoutpage(firstname,lastname,zip){

        await this.checkout.click();
        await this.cancel.click();
        await this.checkout1.click();
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.zip.fill(zip);
        await this.continue.click();
        await this.cancel1.click();
        await this.cart2.click();
        await this.checkout2.click();
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.zip.fill(zip);
        await this.continue1.click();

    };
};
module.exports = Checkout;