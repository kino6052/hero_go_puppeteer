import { Page } from 'puppeteer';
import { utils } from '.';

export const KEBAP_MENU_XPATH = '//*[@id="root"]/div[1]/div/div[1]/div[1]/div[2]/button';
export const MENU_OPTION_DELETE_XPATH = '/html/body/div[4]/div[2]/ul/li[6]';
export const BUTTON_CONTAINER_PATH = '//*[@id="root"]/div[1]/div/div[1]/div[2]/div';

export const automationUtils = {
  isOn: async (page: Page) => false,
  clickOnKebapMenu: (page: Page) => async () => {
    await utils.click(page)(KEBAP_MENU_XPATH);
  },
  openMenuAndClickOnDelete: (page: Page) => async () => {
    await utils.click(page)(KEBAP_MENU_XPATH);
    await utils.sleep(2);
    const option = (await page.$x(MENU_OPTION_DELETE_XPATH))[0];
    const deleteOptionText = await option.evaluate(e => e.textContent);
    if (!deleteOptionText.includes('Delete')) throw new Error('No Delete Option');
    await utils.click(page)(MENU_OPTION_DELETE_XPATH);
    await utils.sleep(2);
  },
  isEditMode: (page: Page) => async () => {
    const buttonContainer =  (await page.$x(BUTTON_CONTAINER_PATH))[0];
    return buttonContainer.evaluate(e => e.childNodes.length === 3); // Should Contain 3 Buttons
  },
};
