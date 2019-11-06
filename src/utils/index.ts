import { Page } from 'puppeteer';

export const DIR = 'src/specs';
export const LOADING_XPATH = '/html/body/div[2]/div[2]/div/div';

export const utils = {
  sleep: async (seconds: number) => {
    return new Promise(res => setTimeout(() => res(), seconds * 1000 || 100));
  },
  getElementByPath: (page: Page) => async (xpath: string) => {
    return (await page.$x(xpath))[0];
  },
  findInputAndType: (page: Page) => async (xpath: string, text: string) => {
    const input = await utils.getElementByPath(page)(xpath);
    await input.focus();
    await page.keyboard.type(text);
  },
  click: (page: Page) => async (xpath: string) => {
    const element = (await page.$x(xpath))[0];
    await element.click();
  },
  isElementPresent: (page: Page) => async (xpath: string) => {
    const element = (await page.$x(xpath))[0];
    return !!element;
  },
};
