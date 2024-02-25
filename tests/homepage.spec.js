
import { test } from "@playwright/test";
import { Homepage } from "../models/homepage.model";

test.describe.parallel('uiplayground test',()=>{
    test('Homepage test', async ({ page }) => {
        const home = new Homepage(page);
        
        await home.open();
    })
    
})