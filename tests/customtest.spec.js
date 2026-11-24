import { customTest, expect } from '../utilfiles/fixturedata';

customTest('First Test', async ({ page, loginDataValid }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginDataValid.userName);

  await page.locator('[data-test="password"]').fill(loginDataValid.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);

});

customTest('Second Test', async ({ loggedInPage }) => {

  await expect(loggedInPage).toHaveURL(/inventory\.html/);

});




