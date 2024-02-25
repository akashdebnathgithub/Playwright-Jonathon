import { Page,expect } from "@playwright/test";


export class DynamicTable {
  constructor(page) {
    this.page = page
    this.url = page.goto('/dynamictable')
    this.warningText = page.locator('.bg-warning')
    this.tableData = page.locator("(//div[@role='rowgroup'])[last()]/descendant::span")
  }

  async navigateToUrl(){
    await this.url
  }

  async  getWarningText(){
    let warningTxt = await this.warningText.textContent();
    let warnTxtInArray = warningTxt.split(" ")
    let warnPercentage = warnTxtInArray[2]
    console.log(warnPercentage);
    return warnPercentage
  }

  async getTableValue(){
    let tableValues = await this.tableData.evaluateAll((data)=>{
        // Use map to transform elements and return the transformed array
        return data.map((el)=>{
           return el.textContent;
        });
    });
    console.log(tableValues);
    return tableValues;
}

  
}