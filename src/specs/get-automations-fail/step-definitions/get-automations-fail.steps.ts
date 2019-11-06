import { loadFeature, defineFeature } from 'jest-cucumber';
import { initUtils } from '../../../utils/InitUtils';
import { loginPageUtils } from '../../../utils/LoginPageUtils';
import { Page } from 'puppeteer';
import { DIR, utils, LOADING_XPATH } from '../../../utils';
import { automationUtils } from '../../../utils/AutomationUtils';

const PATH_TO_FEATURE = `${DIR}/get-automations-fail/features/get-automations-fail.feature`;

const feature = loadFeature(PATH_TO_FEATURE);

defineFeature(feature, (test) => {
  let page: Page;
  afterAll(async () => {
    await initUtils.close();
    await automationUtils.openMenuAndClickOnDelete(page);
  });
  test('Get Automations Failure', ({ given, when, then }) => {
    given('We are logged in', async () => {
      page = await initUtils.init();
      await loginPageUtils.defaultLogin(page);
      await page.setRequestInterception(true);
      page.on('request', async (request) => {
        if (request.url().includes('clickbot')) {
          await request.respond({ status: 503 });
        } else {
          await request.continue();
        }
      });
    });

    when('We can\'t get Automations', async () => {
      await utils.sleep(2);
      await page.setRequestInterception(false);
    });

    then('No loading screen is present', async () => {
      await utils.sleep(2);
      const isLoadingPresent = await utils.isElementPresent(page)(LOADING_XPATH);
      const isOnLogin = await loginPageUtils.isOn(page);
      expect(isOnLogin).toBe(true);
      expect(isLoadingPresent).toBe(false);
    });
  });
});
