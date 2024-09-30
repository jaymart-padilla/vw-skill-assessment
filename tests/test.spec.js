import {test, expect} from '@playwright/test'
import LoginPage from '../pages/LoginPage'

test.describe("Test assessment", () => {
  test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.navigate()  
  })  

  test("should login", async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.checkFormVisible()
    await loginPage.fillForm();
    await loginPage.submitForm()
  })  
})