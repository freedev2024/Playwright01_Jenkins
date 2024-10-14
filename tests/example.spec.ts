import { test, expect, chromium } from '@playwright/test';

 //let browser: Browser;
 //let page: Page;

 let browser;
 let context;
 let page;

  test.beforeAll(async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();

  //page = await browser.newPage();
  await page.goto('https://playwright.dev/');
  });

  test.beforeEach(async ({ browser }) => {
    // Create a new context and page for each test
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://playwright.dev/');
  });


  test.afterEach(async () => {
    // Close the page after each test
    await page.close();
  });

  test.afterAll(async () => {
    // Optionally log the page content or take a screenshot
    //console.log(await page.content());
    await context.close();
    await browser.close();
  });

//test('has title', async ({ page }) => {
test('has title', async () => {
  //await page.goto('https://playwright.dev/');
  //await expect(page).toHaveScreenshot();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

//test('get started link', async ({ page }) => {
test('get started link', async () => {
  //await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  
});