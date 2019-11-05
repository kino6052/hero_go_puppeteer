import * as path from 'path';
import * as puppeteer from 'puppeteer';
import { heroGoPath } from '../../test-list';

let browser: puppeteer.Browser;

export const initUtils = {
  init: async () => {
    const pathToExtension = path.join(__dirname, '../..', heroGoPath);
    browser = await puppeteer.launch({
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    const targets = await browser.targets();
    const target = targets.find(
        target => target.type() === 'background_page',
    );
    const url = target.url();
    const [, , extensionId] = url.split('/');
    const page = await browser.newPage();
    await page.goto(`chrome-extension://${extensionId}/index.html`);
    return page;
  },
  close: async () => browser.close(),
};
