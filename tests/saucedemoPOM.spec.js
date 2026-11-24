import { test, expect } from '@playwright/test';
const Login  = require('../page/Login');
const Dashboard = require('../page/Dashboard');
const Cart = require('../page/Cart');
const Checkout = require('../page/Checkout');
const Ordersummary = require('../page/Ordersummary');
const Logout = require('../page/logout');
test("  Saucedemo full automation POM", async({page}) => {
 const login = new Login(page);
 await login.gotoLoginPage();
 await login.loginToPage("standard_user","secret_sauce");
 const dashboard = new Dashboard(page);
 await dashboard.additem();
 await dashboard.removeitems();
 const cart = new Cart(page);
 await cart.cartpage();
 const checkout = new Checkout(page);
//await checkout.checkoutpage();
 await checkout.checkoutpage("Sibila","thomas","691305");
 const ordersummary = new Ordersummary(page);
 await ordersummary.ordersummarypage();
 const logout = new Logout(page);
 await logout.logoutpage();

});