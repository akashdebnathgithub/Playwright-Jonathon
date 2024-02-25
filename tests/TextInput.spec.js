import { test } from '@playwright/test'; 
import { TextInput } from "../models/textInput";
test('text input test', async ({ page }) => {
    const textInput = new TextInput(page);
    await textInput.navigateToUrl();
    await textInput.enterText('test')
    await textInput.clickOnButton()
    await textInput.btnChangeafterClick('test')
})
