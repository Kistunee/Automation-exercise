import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('frozenshreya@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.goto('https://automationexercise.com/');
  await page.goto('https://automationexercise.com/login');
  await page.goto('https://automationexercise.com/');
  await page.goto('https://automationexercise.com/');
});