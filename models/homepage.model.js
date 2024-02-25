import { page,expect } from "@playwright/test";

export class Homepage  {
  constructor(page) {
    this.page = page
    this.url =  page.goto('/home');
  }

  async open() {
    await this.url;
    //expect(this.url).toContainText('/home')
  }
}