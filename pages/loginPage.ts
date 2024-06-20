import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    private usernameInput: string = 'input[placeholder="Email"]';
    private passwordInput: string = 'input[placeholder="Password"]';
    private loginButtonXpath: string = '//div[@class="grid grid-flow-row relative justify-start font-roboto h-full hidden md:grid justify-center"]';
    private acceptCookiesButton: string = '//button[normalize-space()="Accept All Cookies"]';

    private loginUrl: string = 'https://www.zoro.co.uk';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(this.loginUrl);
        
        // Wait for and accept the cookies
        await this.page.waitForSelector(this.acceptCookiesButton, { timeout: 10000 });
        await this.page.click(this.acceptCookiesButton);
    }


    async clickLoginButton() {
      try {
          await this.page.click(this.loginButtonXpath);
          // Wait for the login popup to appear
          // await this.page.waitForSelector(this.loginPopupSelector, { timeout: 10000 });
      } catch (error) {
          console.error(`Error clicking login button: ${error}`);
          throw error;
      }
  }

    async fillUsername(username: string) {
        try {
            await this.page.fill(this.usernameInput, username);
        } catch (error) {
            console.error(`Error filling username: ${error}`);
            throw error;
        }
    }

    async fillPassword(password: string) {
        try {
            await this.page.fill(this.passwordInput, password);
        } catch (error) {
            console.error(`Error filling password: ${error}`);
            throw error;
        }
    }

    async login(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}
