import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('heading', { name: 'recommended items' })).toBeVisible();
  await page.locator('.item.active > div > .product-image-wrapper > .single-products > .productinfo > .btn').first().click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.getByText('Shopping Cart')).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Description' })).toBeVisible();
  await page.getByRole('cell', { name: 'Stylish Dress Women > Dress' }).click();
  await page.getByRole('link', { name: 'Stylish Dress' }).click();
  await page.goto('https://automationexercise.com/view_cart');
  await page.getByRole('cell', { name: 'Price' }).click();
  await expect(page.locator('#product-4')).toContainText('Rs. 1500');
  await page.getByRole('cell', { name: 'Quantity' }).click();
  await expect(page.locator('#product-4')).toContainText('1');
  await page.getByRole('cell', { name: 'Total' }).click();
  await expect(page.locator('#product-4')).toContainText('Rs. 1500');

});