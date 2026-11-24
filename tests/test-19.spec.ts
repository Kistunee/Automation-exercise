import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByRole('heading', { name: 'Brands' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: '(6)Polo (5)H&M (5)Madame (3)' }).nth(5)).toBeVisible();
  await page.locator('div').filter({ hasText: '(6)Polo (5)H&M (5)Madame (3)' }).nth(5).click();
  await page.locator('div').filter({ hasText: '(6)Polo (5)H&M (5)Madame (3)' }).nth(5).click();
  await expect(page.getByRole('link', { name: '(6) Polo' })).toBeVisible();
  await page.getByRole('link', { name: '(6) Polo' }).click();
  await expect(page.locator('ol').getByText('Polo')).toBeVisible();
  await page.getByRole('heading', { name: 'Brand - Polo Products' }).click();
  await page.getByRole('link', { name: '(5) H&M' }).click();
  await expect(page.getByText('Products H&M')).toBeVisible();
  await page.getByRole('heading', { name: 'Brand - H&M Products' }).click();
  await expect(page.getByText('Brand - H&M Products  Added')).toBeVisible();
});