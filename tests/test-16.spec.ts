import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('noble@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Logged in as shreya')).toBeVisible();

  await page.locator('.features_items .productinfo').filter({ hasText: 'Blue Top' }).locator('.add-to-cart') .click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.getByText('Shopping Cart')).toBeVisible();
  await expect(page.locator('#cart_info')).toBeVisible();
  await expect(page.getByText('Proceed To Checkout')).toBeVisible();
  await page.getByText('Proceed To Checkout').click();

  const deliveryAddress = page.locator('#address_delivery');
  await expect(deliveryAddress).toBeVisible();
  await expect(deliveryAddress).toContainText('Shreya Shrestha');
  await expect(deliveryAddress).toContainText('Smith company');
  await expect(deliveryAddress).toContainText('Patana,8947');
  await expect(deliveryAddress).toContainText('ktm');
  await expect(deliveryAddress).toContainText('newyork');
  await expect(deliveryAddress).toContainText('#45667');
  await expect(deliveryAddress).toContainText('India');
  await expect(deliveryAddress).toContainText('9865487035');

  const billingAddress = page.locator('#address_invoice');
  await expect(billingAddress).toBeVisible();
  await expect(billingAddress).toContainText('Shreya Shrestha');
  await expect(billingAddress).toContainText('Smith company');
  await expect(billingAddress).toContainText('Patana,8947');
  await expect(billingAddress).toContainText('ktm');
  await expect(billingAddress).toContainText('newyork');
  await expect(billingAddress).toContainText('#45667');
  await expect(billingAddress).toContainText('India');
  await expect(billingAddress).toContainText('9865487035'); 
 
  await expect(page.locator('#cart_info')).toBeVisible();
  const orderTable = page.locator('#cart_info');
  await expect(orderTable).toBeVisible();
  const productRow = orderTable.locator('#product-1'); 
  await expect(productRow.locator('.cart_description')).toContainText('Blue Top');
  await expect(productRow.locator('.cart_price')).toHaveText('Rs. 500');

  await page.locator('textarea[name="message"]').click();
  await page.locator('textarea[name="message"]').fill('good service.');
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('Shreya');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('727398302');
  await page.getByRole('textbox', { name: 'ex.' }).click();
  await page.getByRole('textbox', { name: 'ex.' }).fill('788');
  await page.getByRole('textbox', { name: 'MM' }).click();
  await page.getByRole('textbox', { name: 'MM' }).fill('09');
  await page.getByRole('textbox', { name: 'YYYY' }).click();
  await page.getByRole('textbox', { name: 'YYYY' }).fill('2028');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await expect(page.getByText('Order Placed!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
});