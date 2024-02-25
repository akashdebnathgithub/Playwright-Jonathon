import { test } from "@playwright/test";
import { Scrollbars } from "../models/scrollbars.model";
test('Operation hiding btn', async ({ page }) => {
    const scrollbars = new Scrollbars(page);
    await scrollbars.navigateToUrl()
    await scrollbars.clickHidingBtn()

})
