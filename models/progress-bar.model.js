import { Page,expect } from "@playwright/test";


export class ProgressBar {
  constructor(page) {
   this.page = page
   this.url = page.goto('/progressbar')
   this.startBtn = page.locator('#startButton')
   this.stopBtn = page.locator('#stopButton')
   this.progressBar = page.locator('#progressBar')
}

async navigateToUrl(){
    await this.url;
}

async clickOnStartBtn() {
    await this.startBtn.click()
}

async clickOnStopBtn() {
    await this.stopBtn.click()
}

async getProgressPercentage() {
    let currentPercent = this.progressBar.innerText()
        return currentPercent
}

}