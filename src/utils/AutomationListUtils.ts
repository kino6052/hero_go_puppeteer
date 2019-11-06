import { Page } from 'puppeteer';
import { utils } from '.';

const CREATE_NEW_BUTTON_XPATH = '//*[@id=\'root\']/div[1]/div/div[1]/div[1]/div/div[1]/button';
const CREATE_NEW_INPUT_XPATH = '/html/body/div[2]/div[2]/div/form/div/div[1]/div/div/div/input';
const CREATE_NEW_SUBMIT_XPATH = '/html/body/div[2]/div[2]/div/form/div/div[2]/div[2]/button';

export const automationListUtils = {
  isOn: async (page: Page) => utils.isElementPresent(page)(CREATE_NEW_BUTTON_XPATH),
  createAutomation: (page: Page) => async (name: string) => {
    await utils.click(page)(CREATE_NEW_BUTTON_XPATH);
    await utils.sleep(2);
    await utils.findInputAndType(page)(CREATE_NEW_INPUT_XPATH, `${name} - puppeteer`);
    await utils.sleep(2);
    await utils.click(page)(CREATE_NEW_SUBMIT_XPATH);
    await utils.sleep(2);
  },
};
