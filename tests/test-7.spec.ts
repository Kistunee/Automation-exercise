import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await expect(page.locator('b')).toContainText('Test Cases');
  await page.getByText('Test Cases Below is the list').click();
 
});