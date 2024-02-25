import { Page,expect } from "@playwright/test";


export class Scrollbars {
  constructor(page) {
    this.page = page
    this.url = page.goto('/scrollbars');
    this.hidingBtn = page.locator('#hidingButton')
  }

  async navigateToUrl(){
    await this.url
  }

  async clickHidingBtn(){
    await this.hidingBtn.click()
    //expect(this.hidingBtn).toHaveText('Hiding Button')
  }
  
}