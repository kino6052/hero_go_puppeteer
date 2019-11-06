import { loadFeature, defineFeature } from 'jest-cucumber';
import { initUtils } from '../../../utils/InitUtils';
import { loginPageUtils } from '../../../utils/LoginPageUtils';
import { automationListUtils } from '../../../utils/AutomationListUtils';
import { Page } from 'puppeteer';
import { DIR, utils } from '../../../utils';
import { automationUtils } from '../../../utils/AutomationUtils';

const PATH_TO_FEATURE = `${DIR}/RBNGO-207-pressing-enter-login/features/enter-to-login.feature`;

const feature = loadFeature(PATH_TO_FEATURE);

// Scenario: Allow to Submit Login Screen with Enter
//   Given We are on the log in page
// When We enter the correct credentials and url
// When We press enter
// Then We should be logged in

defineFeature(feature, (test) => {
  let page: Page;
  afterAll(async () => {
    await automationUtils.openMenuAndClickOnDelete(page);
    await initUtils.close();
  });
  test('Allow to Submit Login Screen with Enter', async ({ given, when, then }) => {
    given('We are on the log in page', async () => {
      page = await initUtils.init();
    });

    when('We enter the correct credentials and url', async () => {
      await loginPageUtils.enterDefaultLoginInfo(page);
    });

    when('We press enter', async () => {
      await page.keyboard.press('Enter');
      await utils.sleep(2);
    });

    then('We should be logged in', async () => {
      const isOnAutomationListPage = await automationListUtils.isOn(page);
      expect(isOnAutomationListPage).toBe(true);
    });
  });
});
