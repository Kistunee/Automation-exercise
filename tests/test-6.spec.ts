import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await page.getByRole('link', { name: ' Contact us' }).click();
  await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('shreya');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('frozenshreya@gmail.com');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('image');
  await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill('image not loading.');
  page.once('dialog',async( dialog) => {
    console.log('Dialog type', dialog.type());
    console.log('Dialog message:', dialog.message());
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page.getByText( 'Success! Your details have been submitted successfully').first()).toBeVisible();
  await page.getByRole('link', { name: / Home/ }).click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
});