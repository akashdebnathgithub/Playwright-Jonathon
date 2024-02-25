
import { page,expect } from "@playwright/test";
export class TextInput {
  constructor(page) {
    this.page = page
    this.url = page.goto("/textinput")
    this.inputField = page.getByPlaceholder('MyButton')
    this.BtnTxt = page.getByRole('button', { name: 'Button That Should Change it\'' })
    this.btnChange = page.locator('#updatingButton')
     }

     async navigateToUrl(){
      await this.url
     }

     async enterText(btnVal){
      await this.inputField.fill(btnVal)
     }
     async  clickOnButton() {
       await expect(this.BtnTxt).toBeVisible();
       await this.BtnTxt.click()
     }
     async btnChangeafterClick(textVal){
      await this.btnChange.waitFor()
      await expect(this.btnChange).toContainText(textVal)
     }
  
}