import { Page } from "@playwright/test";



export class ClassAttribute {
  constructor(page) {
   this.page = page
   this.url = page.goto('/classattr');
   this.blueBtn = page.locator('.btn-primary');
  }

  async navigateToUrl(){
    await this.url
  }

  async clickOnBlueBtn(){
    await this.blueBtn.click()
  }
  
}