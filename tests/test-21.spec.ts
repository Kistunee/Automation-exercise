import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  await page.getByRole('link', { name: ' View Product' }).first().click();
  await page.getByRole('link', { name: 'Write Your Review' }).click();
  await expect(page.getByRole('link', { name: 'Write Your Review' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Shreya');
  await page.getByRole('textbox', { name: 'Add Review Here!' }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('frozenshreya@gmail.com');
  await page.getByRole('textbox', { name: 'Add Review Here!' }).click();
  await page.getByRole('textbox', { name: 'Add Review Here!' }).fill('The quality of clothes is good.');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thank you for  your review')).toBeVisible();
});