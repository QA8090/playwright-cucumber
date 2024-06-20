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
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const loginPage_1 = require("../pages/loginPage");
const hooks_1 = require("../support/hooks"); // Adjust the path as needed
let loginPage;
(0, cucumber_1.Given)('I am on the Zoro login page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        loginPage = new loginPage_1.LoginPage(hooks_1.page);
        yield loginPage.navigate();
    });
});
(0, cucumber_1.When)('I click on login button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield loginPage.clickLoginButton();
    });
});
(0, cucumber_1.When)('I enter the username {string}', function (username) {
    return __awaiter(this, void 0, void 0, function* () {
        yield loginPage.fillUsername(username);
    });
});
(0, cucumber_1.When)('I enter the password {string}', function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield loginPage.fillPassword(password);
    });
});
(0, cucumber_1.When)('I click on the {string} button', function (_button) {
    return __awaiter(this, void 0, void 0, function* () {
        yield loginPage.clickLoginButton();
    });
});
(0, cucumber_1.Then)('I should be redirected to the account dashboard', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(hooks_1.page).toHaveURL('/account/dashboard');
    });
});
(0, cucumber_1.Then)('I should see a welcome message {string}', function (message) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(hooks_1.page.locator(`text=${message}`)).toBeVisible();
    });
});
(0, cucumber_1.Then)('I should see an error message {string}', function (message) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(hooks_1.page.locator(`text=${message}`)).toBeVisible();
    });
});
(0, cucumber_1.Then)('I should remain on the login page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(hooks_1.page).toHaveURL('/login');
    });
});
