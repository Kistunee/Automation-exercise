import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await expect(page.getByRole('link', { name: ' Products' })).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('.productinfo').filter({hasText: 'Blue Top'}).locator('.add-to-cart').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('.productinfo').filter({hasText: 'Men Tshirt'}).locator('.add-to-cart').click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.getByText('Shopping Cart')).toBeVisible();
  const firstProductRow = page.locator('#product-1');
  const secondProductRow = page.locator('#product-2');
  await expect(firstProductRow).toBeVisible();
  await expect(secondProductRow).toBeVisible();
  await expect(firstProductRow.locator('.cart_price')).toHaveText('Rs. 500');
  await expect(firstProductRow.locator('.cart_quantity')).toHaveText('1');
  await expect(firstProductRow.locator('.cart_total')).toHaveText('Rs. 500');
  await expect(secondProductRow.locator('.cart_price')).toHaveText('Rs. 400');
  await expect(secondProductRow.locator('.cart_quantity')).toHaveText('1');
  await expect(secondProductRow.locator('.cart_total')).toHaveText('Rs. 400');   
  
});