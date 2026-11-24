class Login{

    constructor(page){
        this.page = page;
        this.userName = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole("button",{name :"login"});

    }
    async gotoLoginPage(){

        await this.page.goto("https://www.saucedemo.com/inventory.html");

    }
    async loginToPage(userName,password){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    };
};

module.exports = Login;//to export