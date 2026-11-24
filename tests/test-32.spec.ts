import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60_000); 
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.goto('https://automationexercise.com/view_cart');
  await expect(page.getByText('Cart is empty!')).toBeVisible();
  await expect(page.getByRole('link', { name: ' Products' })).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('.features_items .productinfo').filter({ hasText: 'Blue Top' }).locator('.add-to-cart') .click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('.features_items .productinfo').filter({ hasText: 'Blue Top' }).locator('.add-to-cart') .click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.goto('https://automationexercise.com/view_cart');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByText('Add to cart').nth(4).click();
  await page.getByText('Add to cart').nth(5).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.locator('#product-3 > .cart_delete > .cart_quantity_delete').click();
});