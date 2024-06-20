import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { Config } from '@playwright/test';
export class World {
  browser!: Browser;
  page!: Page;
  config: Config;

  constructor() {
    this.config = require('../config/config.json'); 
  }

  async initialize() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async dispose() {
    await this.page.close();
    await this.browser.close();
  }
}

setWorldConstructor(World);
