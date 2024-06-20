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
exports.page = void 0;
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
let browser;
let page;
(0, cucumber_1.setDefaultTimeout)(60 * 1000); // Set the default timeout to 60 seconds
(0, cucumber_1.Before)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        browser = yield test_1.chromium.launch({ headless: false });
        exports.page = page = yield browser.newPage();
        yield page.goto('https://www.zoro.co.uk');
        // Wait for and accept the cookies
        const acceptCookiesButton = '//button[normalize-space()="Accept All Cookies"]';
        yield page.waitForSelector(acceptCookiesButton, { timeout: 10000 });
        yield page.click(acceptCookiesButton);
    });
});
(0, cucumber_1.After)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield page.close();
        yield browser.close();
    });
});
