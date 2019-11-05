import { loadFeature, defineFeature } from 'jest-cucumber';
import { initUtils } from '../../../utils/InitUtils';
import { loginPageUtils } from '../../../utils/LoginPageUtils';
import { automationListUtils } from '../../../utils/AutomationListUtils';
import { Page } from 'puppeteer';
import { DIR, utils, LOADING_XPATH } from '../../../utils';

const PATH_TO_FEATURE = `${DIR}/RBNGO-134-503-response (bugfix)/features/503.feature`;

const feature = loadFeature(PATH_TO_FEATURE);

defineFeature(feature, (test) => {
  afterAll(async () => initUtils.close());
  test('Shouldn\'t get Stuck when Getting 503 Error', async ({ given, when, then }) => {
    let page: Page;

    given('We are logged in', async () => {
      page = await initUtils.init();
      await loginPageUtils.defaultLogin(page)();
      await utils.sleep(2);
    });

    given('We created a new Automation and return 503', async () => {
      await page.setRequestInterception(true);
      page.on('request', request => request.respond({ status: 503 }));
      await automationListUtils.createAutomation(page)('puppeteer');
      await page.setRequestInterception(false);
    });

    then('I should not see the loading screen', async () => {
      const isLoadingPresent = await utils.isElementPresent(page)(LOADING_XPATH);
      expect(isLoadingPresent).toBe(false);
    });
  });
});
