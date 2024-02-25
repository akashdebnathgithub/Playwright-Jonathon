import { test } from '@playwright/test'; 
import { ClassAttribute } from '../models/classAttribute.model';
test('Class attribute test', async ({ page }) => {
    const classAttr = new ClassAttribute(page);
    page.on('dialog', (dialog) => {
        console.log(`Dialog event fired with message: ${dialog.message()}`);
        dialog.dismiss();
    })
    await classAttr.navigateToUrl()
    await classAttr.clickOnBlueBtn()
})