import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByText('Rs. 500 Blue Top Add to cart').nth(1)).toBeVisible();
  await page.getByRole('link', { name: ' View Product' }).first().click();

  await page.getByText('Blue Top Category: Women >').click();
  await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
  await page.getByText('Category: Women > Tops').click();
  await expect(page.getByText('Rs.')).toBeVisible();
  await expect(page.getByText('Availability: In Stock')).toBeVisible();
  await expect(page.getByText('Condition: New')).toBeVisible();
  await expect(page.getByText('Brand: Polo')).toBeVisible();
  await expect(page.getByText('Rs. 500 Quantity: Add to cart')).toBeVisible();

});