import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await expect(page.getByRole('heading', { name: 'Sample App' })).toBeVisible();
  await expect(page.getByText('User logged out.')).toBeVisible();
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('Bob');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('********').click();
  await page.getByPlaceholder('********').fill('pwd');
  await expect(page.getByPlaceholder('********')).toHaveValue('pwd');
  await expect(page.locator('#login')).toContainText('Log In');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('#loginstatus')).toContainText('Welcome, Bob!');
  await page.getByRole('button', { name: 'Log Out' }).click();
  await expect(page.locator('div').filter({ hasText: 'User logged out.' }).nth(2)).toBeVisible();
});

