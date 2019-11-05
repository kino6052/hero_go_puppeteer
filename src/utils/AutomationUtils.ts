import { Page } from 'puppeteer';
import { utils } from '.';

export const KEBAP_MENU_XPATH = '//*[@id=\'root\']/div[1]/div/div[1]/div[1]/div[2]/button';
export const MENU_OPTION_DELETE_XPATH = '/html/body/div[2]/div[2]/ul/li[5]';

export const automationUtils = {
  isOn: async (page: Page) => false,
  clickOnKebapMenu: (page: Page) => async () => {
    await utils.click(page)(KEBAP_MENU_XPATH);
  },
  openMenuAndClickOnDelete: (page: Page) => async () => {
    await utils.click(page)(KEBAP_MENU_XPATH);
    await utils.click(page)(MENU_OPTION_DELETE_XPATH);
  },
};
