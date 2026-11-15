import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
  await expect(page.locator('#footer')).toContainText('Subscription');
  await page.getByRole('textbox', { name: 'Your email address' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).fill('frozenshreya@gmail.com');
  await page.locator('#subscribe').click();
  await page.getByText('You have been successfully').click();
  await expect(page.getByText('You have been successfully')).toBeVisible();
});