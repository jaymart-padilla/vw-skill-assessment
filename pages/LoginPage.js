import { expect } from "@playwright/test";

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.signInBtn = page.getByRole('link', { name: 'Sign in' })
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.submitBtn = page.getByRole('button', { name: 'Login' });
  }

  async navigate() {
    const url = 'https://sandbox.yourfreedomprojecthub.com/'
    await this.page.goto(url);

    await expect.soft(this.signInBtn).toBeVisible();
    await this.signInBtn.click();
  }

  async checkFormVisible() {
    await expect.soft(this.emailInput).toBeVisible();
    await expect.soft(this.passwordInput).toBeVisible();
    await expect.soft(this.submitBtn).toBeVisible();
  }

  async fillForm() {
    const email = "group-devs@virtual-wonders.com"
    const password = "demo"

    await this.emailInput.fill(email);
    await expect(this.emailInput).not.toBeEmpty()
    await expect(this.emailInput).toHaveValue(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)

    await this.passwordInput.fill(password);
    await expect(this.emailInput).not.toBeEmpty()
    await expect(this.passwordInput).toHaveValue(password)
  }

  async submitForm() {
    await this.submitBtn.click();
  }
}

export default LoginPage;