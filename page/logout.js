class Logout
{
    constructor(page){
        this.page = page;
        this.openmenu = page.getByRole("button",{name:"Open Menu"});
        this.logouts = page.locator("#logout_sidebar_link");
    }
    async logoutpage(){
         await this.openmenu.click();
        await this.logouts.click();
    };
};
    module.exports = Logout;