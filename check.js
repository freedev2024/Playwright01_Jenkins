const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to a blank page or your target application
  await page.goto('https://example.com');

  // Set an item in local storage
  await page.evaluate(() => {
    localStorage.setItem('myKey', 'myValue');
  });

 await page.reload();

  // Retrieve the item from local storage
  const value = await page.evaluate(() => {
    return localStorage.getItem('myKey');
  });

  // Log the retrieved value
  console.log(`Retrieved value from local storage: ${value}`);

  // Clean up
  await browser.close();
})();