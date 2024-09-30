import { expect } from "@playwright/test";

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.submitBtn = page.locator('[data-test="login-button"]')
  }

  async navigate() {
    const url = `https://www.saucedemo.com/`;
    await this.page.goto(url);
    await expect(this.page).toHaveURL(url);
  }

  async checkFormVisible() {
    await expect.soft(this.usernameInput).toBeVisible();
    await expect.soft(this.usernameInput).toBeVisible();
    await expect.soft(this.submitBtn).toBeVisible();
  }

  async fillForm() {
    const username = "standard_user"
    const password = "secret_sauce"

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async submitForm() {
    await this.submitBtn.click();
  }
}

export default LoginPage;