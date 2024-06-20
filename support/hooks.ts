import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

let browser: Browser;
let page: Page;

setDefaultTimeout(60 * 1000); // Set the default timeout to 60 seconds

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  await page.goto('https://www.zoro.co.uk');

  // Wait for and accept the cookies
  const acceptCookiesButton = '//button[normalize-space()="Accept All Cookies"]';
  await page.waitForSelector(acceptCookiesButton, { timeout: 10000 });
  await page.click(acceptCookiesButton);
});

After(async function () {
  await page.close();
  await browser.close();
});

export { page };
