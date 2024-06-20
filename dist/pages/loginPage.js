"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    constructor(page) {
        this.usernameInput = 'input[placeholder="Email"]';
        this.passwordInput = 'input[placeholder="Password"]';
        this.loginButtonXpath = '//div[@class="grid grid-flow-row relative justify-start font-roboto h-full hidden md:grid justify-center"]';
        this.acceptCookiesButton = '//button[normalize-space()="Accept All Cookies"]';
        this.loginUrl = 'https://www.zoro.co.uk';
        this.page = page;
    }
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(this.loginUrl);
            // Wait for and accept the cookies
            yield this.page.waitForSelector(this.acceptCookiesButton, { timeout: 10000 });
            yield this.page.click(this.acceptCookiesButton);
        });
    }
    clickLoginButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.page.click(this.loginButtonXpath);
                // Wait for the login popup to appear
                // await this.page.waitForSelector(this.loginPopupSelector, { timeout: 10000 });
            }
            catch (error) {
                console.error(`Error clicking login button: ${error}`);
                throw error;
            }
        });
    }
    fillUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.page.fill(this.usernameInput, username);
            }
            catch (error) {
                console.error(`Error filling username: ${error}`);
                throw error;
            }
        });
    }
    fillPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.page.fill(this.passwordInput, password);
            }
            catch (error) {
                console.error(`Error filling password: ${error}`);
                throw error;
            }
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fillUsername(username);
            yield this.fillPassword(password);
            yield this.clickLoginButton();
        });
    }
}
exports.LoginPage = LoginPage;
