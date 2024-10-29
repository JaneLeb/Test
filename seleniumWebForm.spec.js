const { test, expect } = require('@playwright/test');

test('check header1 is visible') async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await expect(page.getByLabel('Text input', { exact: true })).toBeVisible();
});


test('check header2 is visible') async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await expect(page.getByLabel('Text input', { exact: true })).toBeVisible();
});


test('check header3 is visible') async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await expect(page.getByLabel('Text input', { exact: true })).toBeVisible();
});

test.describe('Add works:', () => {
    test('add 1 work', addWork = async() => {
      await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
       const field = await page.getByPlaceholder('What needs to be done?');   
       await field.fill(nameWork);
       await page.keyboard.press('Enter');   
       await expect(page.getByTestId('Text input')).toContainText(nameWork);   
    });