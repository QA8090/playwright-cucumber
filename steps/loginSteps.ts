import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { page } from '../support/hooks'; // Adjust the path as needed

let loginPage: LoginPage;

Given('I am on the Zoro login page', async function () {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('I click on login button', async function () {
  await loginPage.clickLoginButton();
});

When('I enter the username {string}', async function (username: string) {
  await loginPage.fillUsername(username);
});

When('I enter the password {string}', async function (password: string) {
  await loginPage.fillPassword(password);
});

When('I click on the {string} button', async function (_button: string) {
  await loginPage.clickLoginButton();
});

Then('I should be redirected to the account dashboard', async function () {
  await expect(page).toHaveURL('/account/dashboard');
});

Then('I should see a welcome message {string}', async function (message: string) {
  await expect(page.locator(`text=${message}`)).toBeVisible();
});

Then('I should see an error message {string}', async function (message: string) {
  await expect(page.locator(`text=${message}`)).toBeVisible();
});

Then('I should remain on the login page', async function () {
  await expect(page).toHaveURL('/login');
});
