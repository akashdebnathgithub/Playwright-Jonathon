const { test } = require('@playwright/test'); 
const { SampleAppPage } = require('../models/sample-app.model'); // bring in the sample-app.model.js

test('log in success', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) // new instance of the SampleAppPage class
    // notice the rest is readable code. we dont have to guess whats happening here.
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("Percival Picklepants") 
    await sampleAppPage.fillPasswordField("pwd") 
    await sampleAppPage.clickLoginButton() 
    await sampleAppPage.expectedLoginTextToBe("Welcome, Percival Picklepants!") 
});