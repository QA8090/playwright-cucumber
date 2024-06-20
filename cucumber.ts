import { setWorldConstructor, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { World } from './support/world';


setWorldConstructor(World);


let browser: Browser;
let page: Page;

Before(async function (this: World) {
  browser = await chromium.launch();
  this.page = await browser.newPage();
});

After(async function (this: World) {
  await this.page.close();
  await browser.close();
});

setWorldConstructor(World);
