import { loadFeature, defineFeature } from 'jest-cucumber';
import { initUtils } from '../../../utils/InitUtils';
import { loginPageUtils } from '../../../utils/LoginPageUtils';
import { Page } from 'puppeteer';
import { DIR, utils, LOADING_XPATH } from '../../../utils';
import { automationListUtils } from '../../../utils/AutomationListUtils';
import { automationUtils } from '../../../utils/AutomationUtils';

const PATH_TO_FEATURE = `${DIR}/get-actions-fail/features/get-actions-fail.feature`;

const feature = loadFeature(PATH_TO_FEATURE);

defineFeature(feature, (test) => {
  let page: Page;
  afterAll(async() => {
    await automationUtils.openMenuAndClickOnDelete(page);
    await initUtils.close();
  });
  test('Get Actions Failure', ({ given, when, then }) => {
    given('We are logged in', async () => {
      page = await initUtils.init();
      await loginPageUtils.defaultLogin(page);
    });

    when('We create an automation', async () => {
      await utils.sleep(2);
      await page.setRequestInterception(true);
      page.on('request', async (request) => {
        if (request.url().includes('/clickbot/')) {
          await request.respond({ status: 503 });
        } else {
          await request.continue();
        }
      });
      await automationListUtils.createAutomation(page)('get-actions-fail');
    });

    when('We transition to the action list page', async () => {
      await utils.sleep(2);
      await page.setRequestInterception(false);
    });

    when('Error is returned', async () => {
      // TODO: ...
    });

    then('No loading screen is present', async () => {
      await utils.sleep(2);
      const isLoadingPresent = await utils.isElementPresent(page)(LOADING_XPATH);
      const isOnLogin = await loginPageUtils.isOn(page);
      expect(isOnLogin).toBe(false);
      expect(isLoadingPresent).toBe(false);
    });
  });
});
