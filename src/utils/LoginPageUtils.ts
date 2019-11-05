import { utils } from '.';
import { Page } from 'puppeteer';

const LOGIN_BUTTON_XPATH = '//*[@id=\'root\']/div[1]/div/div[2]/div/div[4]/button';
const URL_INPUT_XPATH = '//*[@id=\'root\']/div[1]/div/div[2]/div/div[3]/div/div/input';
const USERNAME_INPUT_XPATH = '//*[@id=\'root\']/div[1]/div/div[2]/div/div[1]/div/div/input';
const PASSWORD_INPUT_XPATH = '//*[@id=\'root\']/div[1]/div/div[2]/div/div[2]/div/div/input';

const DEFAULT_URL = 'https://nuodwh-ort8y1.devcloud.automationhero.ai/';
const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'secret';

export const loginPageUtils = {
  clickLoginButton: async (page: Page) => {
    await utils.click(page)(LOGIN_BUTTON_XPATH);
  },
  enterURL: (page: Page) => async (url: string) => {
    await utils.findInputAndType(page)(URL_INPUT_XPATH, url);
  },
  enterUsernameAndPassword: (page: Page) => async (username: string, password: string) => {
    await utils.findInputAndType(page)(USERNAME_INPUT_XPATH, username);
    await utils.findInputAndType(page)(PASSWORD_INPUT_XPATH, password);
  },
  defaultLogin: (page: Page) => async () => {
    await loginPageUtils.enterUsernameAndPassword(page)(DEFAULT_USERNAME, DEFAULT_PASSWORD);
    await loginPageUtils.enterURL(page)(DEFAULT_URL);
    await loginPageUtils.clickLoginButton(page);
  },
};
