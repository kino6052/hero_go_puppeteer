import { loadFeature, defineFeature } from 'jest-cucumber';
import { initUtils } from '../../../utils/InitUtils';
import { loginPageUtils } from '../../../utils/LoginPageUtils';
import { automationListUtils } from '../../../utils/AutomationListUtils';
import { Page } from 'puppeteer';
import { DIR, utils } from '../../../utils';

const PATH_TO_FEATURE = `${DIR}/login/features/login.feature`;
const SERVER_URL = 'https://nuodwh-ort8y1.devcloud.automationhero.ai/';

const feature = loadFeature(PATH_TO_FEATURE);

defineFeature(feature, (test) => {
  afterAll(async () => initUtils.close());
  test('Logging in with the Correct Credentials', async ({ given, when, then }) => {
    let page: Page;

    given('We are on the login page', async () => {
      page = await initUtils.init();
    });

    when('I enter correct credentials', async () => {
      await loginPageUtils.enterUsernameAndPassword(page)('admin', 'secret');
    });

    when('I enter working URL', async () => {
      await loginPageUtils.enterURL(page)(SERVER_URL);
    });

    when('I click on the login button', async () => {
      await loginPageUtils.clickLoginButton(page);
    });

    then('I should land on the \'Automation List Page\'', async () => {
      await utils.sleep(2)  ;
      const isOnAutomationPage = await automationListUtils.isOn(page);
      expect(isOnAutomationPage).toBe(true);
    });
  });
});
