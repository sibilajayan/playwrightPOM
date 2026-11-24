import { test as base, expect, Page } from '@playwright/test';

type LoginData = {

  userName: string;

  password: string;

  testName: string;

};

type MyFixtures = {

  loginDataValid: LoginData;

  loggedInPage: Page;

};

export const customTest = base.extend<MyFixtures>({

  loginDataValid: {

    userName: 'standard_user',

    password: 'secret_sauce',

    testName: 'valid cred',

  },

  loggedInPage: async ({ page, loginDataValid }, use) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill(loginDataValid.userName);

    await page.locator('[data-test="password"]').fill(loginDataValid.password);

    await page.locator('[data-test="login-button"]').click();

    await use(page);

  },

});

export { expect };




