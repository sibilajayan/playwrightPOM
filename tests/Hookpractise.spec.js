import { test } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("file:///D:/PlayWright%20Training/locators-practice.html");
});

test.afterEach(async ({ page }) => {
    console.log('Current URL:', page.url());
});

test("Fill Value", async({page})=>{
    await page.locator("#first-name").fill("Sibila");
})

test("Fill Value1", async({page})=>{
    await page.locator("#os-windows").click();
})

test("Fill Value3", async({page})=>{
    await page.locator("#bio-area").fill("Nothing");
})