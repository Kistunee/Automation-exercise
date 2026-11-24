import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('SHREYA');

  const signupEmailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
  await signupEmailInput.fill('testuser.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  const validationMessage = await signupEmailInput.evaluate(
    (el: HTMLInputElement) => el.validationMessage);
  expect(validationMessage).toContain("include an '@'");
 

});