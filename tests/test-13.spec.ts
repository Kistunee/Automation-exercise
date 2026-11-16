import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await expect(page.getByRole('link', { name: ' Products' })).toBeVisible();
  await page.getByRole('link', { name: ' View Product' }).first().click();
  await page.getByText('Blue Top Category: Women >').click();
  await page.getByRole('heading', { name: 'Blue Top' }).click();
  await page.getByText('Availability: In Stock').click();
  await page.getByText('Brand: Polo').click();
  await page.getByText('Condition: New').click();
  await page.getByText('Rs. 500 Quantity: Add to cart').click();
  await page.locator('#quantity').fill('2');
  await page.locator('#quantity').click();
  await page.locator('#quantity').fill('3');
  await page.locator('#quantity').click();
  await page.locator('#quantity').fill('4');
  await page.locator('#quantity').click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.locator('#product-1 .cart_quantity')).toContainText('4');
});