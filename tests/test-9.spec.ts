import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('beautiful peacock');
  await page.locator('#submit_search').click();
  await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
  
});