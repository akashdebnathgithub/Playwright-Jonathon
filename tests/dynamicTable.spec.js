import { expect, test } from "@playwright/test";
import { DynamicTable } from "../models/dynamicTable.model";

test('Dynamic table challenge', async ({ page }) => {
    const dynamictable = new DynamicTable(page);
    await dynamictable.navigateToUrl()
    await dynamictable.getWarningText()
    await dynamictable.getTableValue()
    expect(await dynamictable.getTableValue()).toContain(await dynamictable.getWarningText());

})
