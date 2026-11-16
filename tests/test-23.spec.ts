import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('shreya');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('siuyiyije405@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Name *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('password');
  await page.locator('#days').selectOption('3');
  await page.locator('#months').selectOption('4');
  await page.locator('#years').selectOption('2017');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Shreya');
  await page.getByRole('textbox', { name: 'Last name *' }).click();
  await page.getByRole('textbox', { name: 'Last name *' }).fill('Shrestha');
  await page.getByRole('textbox', { name: 'Company', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Smith company');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Patana,8947,Smith company');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('newyork');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('#45667');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('9865487035');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('ktm');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByText('Logged in as shreya')).toBeVisible

  await page.locator('.features_items .productinfo').filter({ hasText: 'Blue Top' }).locator('.add-to-cart') .click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.getByText('Shopping Cart')).toBeVisible();
  await expect(page.locator('#cart_info')).toBeVisible();
  await page.getByText('Proceed To Checkout').click();

  const deliveryAddress = page.locator('#address_delivery');
  await expect(page.locator('#address_delivery')).toBeVisible();
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

  await page.getByRole('link', { name: 'Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
});