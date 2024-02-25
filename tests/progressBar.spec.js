import { test } from "@playwright/test";
import { ProgressBar } from "../models/progress-bar.model";

test('Progress Bar Evaluation', async ({ page }) => {
    const progressBar = new ProgressBar(page);
    await progressBar.navigateToUrl()
    await progressBar.clickOnStartBtn()
    while (await progressBar.getProgressPercentage() !== '60%'){
        console.log(`current progress bar is ${await progressBar.getProgressPercentage()}`);
    }
    await progressBar.clickOnStopBtn()
})
