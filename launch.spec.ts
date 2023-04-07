import { test,chromium, expect } from '@playwright/test';

(async () => {
    const browser = await Playwright.chromium.launch();  // Or 'chromium' or 'webkit'.
    // Create a new incognito browser context.
    const context = await browser.newContext();
    // Create a new page in a pristine context.
    const page = await context.newPage();
    await page.goto('https://magento.softwaretestingboard.com/');
  
    // Gracefully close up everything
    await context.close();
    await browser.close();
  })();