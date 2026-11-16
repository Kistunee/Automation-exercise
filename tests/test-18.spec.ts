import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('heading', { name: 'Category' })).toBeVisible();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.locator('#Women').getByRole('link', { name: 'Dress' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toBeVisible();
  await page.getByRole('link', { name: ' Men' }).click();
  await expect(page.getByRole('link', { name: 'Tshirts', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Tshirts', exact: true }).click();
  await expect(page.getByText('Men - Tshirts Products ')).toBeVisible();
  await page.getByText('Products Men > Tshirts').click();
});