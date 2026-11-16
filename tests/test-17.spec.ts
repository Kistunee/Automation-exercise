import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await page.locator('.features_items .productinfo').filter({ hasText: 'Blue Top' }).locator('.add-to-cart') .click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.getByRole('link', { name: 'Blue Top' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Price' })).toBeVisible();
  await expect(page.locator('#product-1')).toContainText('Rs. 500');
  await page.getByRole('cell', { name: 'Quantity' }).click();
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('cell', { name: 'Total' }).click();
  await expect(page.locator('#product-1')).toContainText('Rs. 500');
  await page.locator('.cart_quantity_delete').click();
  await expect(page.getByText('Cart is empty!')).toBeVisible();
  await page.getByText('Cart is empty! Click here to').click();
  await expect(page.getByText('Cart is empty! Click here to')).toBeVisible();
});