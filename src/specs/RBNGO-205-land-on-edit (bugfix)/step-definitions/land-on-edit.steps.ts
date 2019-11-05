import { loadFeature, defineFeature } from 'jest-cucumber';
import { initUtils } from '../../../utils/InitUtils';
import { loginPageUtils } from '../../../utils/LoginPageUtils';
import { automationListUtils } from '../../../utils/AutomationListUtils';
import { Page } from 'puppeteer';
import { DIR, utils } from '../../../utils';
import { automationUtils } from '../../../utils/AutomationUtils';

const PATH_TO_FEATURE = `${DIR}/RBNGO-205-land-on-edit (bugfix)/features/land-on-edit.feature`;

const feature = loadFeature(PATH_TO_FEATURE);

defineFeature(feature, (test) => {
  let page: Page;
  afterAll(async () => {
    await automationUtils.openMenuAndClickOnDelete(page)();
    await initUtils.close();
  });
  test('Should Land on Edit When Creating an Automation', async ({ given, when, then }) => {
    given('We are logged in', async () => {
      page = await initUtils.init();
      await loginPageUtils.defaultLogin(page)();
      await utils.sleep(2);
    });

    when('We created a new automation', async () => {
      await automationListUtils.createAutomation(page)('puppeteer');
    });

    then('I should land on the automation page in edit mode', async () => {
      const isEditMode = await automationUtils.isEditMode(page)();
      expect(isEditMode).toBe(true);
    });
  });
});
