import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByText('Home  Products Cart Signup')).toBeVisible();
  await page.getByRole('heading', { name: 'Subscription' }).click();
  await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
  await page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight));
  const scrollUpArrow =page.locator('#scrollUp');
  await scrollUpArrow.waitFor({ state: 'visible'});
  await scrollUpArrow.click();
  await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
});