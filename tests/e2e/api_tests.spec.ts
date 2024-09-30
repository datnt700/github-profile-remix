import { test, expect } from '@playwright/test';

test.describe('Search', () => {
  test('should have correct elements', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const searchInput = page.locator('input[placeholder="username"]');
    await searchInput.fill('datnt700');

    const repositoryList = page.locator('[data-testid="repository-list"]');
    await expect(repositoryList).toHaveAttribute('data-active', 'true');
    await expect(repositoryList).toBeVisible();
  });
});

test('should call API and fetch repository data when showProfile is clicked', async ({
  page,
}) => {
  await page.goto('http://localhost:5173');

  await page.fill('input[placeholder="username"]', 'datnt700');

  await page.waitForTimeout(1000);
  const profileImage = page.locator('img[alt="avatar"]');
  await expect(profileImage).toBeVisible();

  await page.click('div[data-testid="repository-list"]');

  const repositoryList = await page.locator(
    'div[data-testid="repository-list"]'
  );
  await expect(repositoryList).toBeVisible();
});
