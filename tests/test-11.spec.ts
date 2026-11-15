import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('html').click();
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByRole('heading', { name: 'Subscription' }).click();
  await expect(page.getByRole('heading')).toContainText('Subscription');
  await page.getByRole('textbox', { name: 'Your email address' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).fill('frozenshreya@gmail.com');
  await page.locator('#subscribe').click();
  await page.getByText('You have been successfully').click();
  await expect(page.getByText('You have been successfully')).toBeVisible();

});