import { loadFeature, defineFeature } from 'jest-cucumber';
import { initUtils } from '../../../utils/InitUtils';
import { loginPageUtils } from '../../../utils/LoginPageUtils';
import { automationListUtils } from '../../../utils/AutomationListUtils';
import { Page } from 'puppeteer';
import { DIR } from '../../../utils';

const PATH_TO_FEATURE = `${DIR}/login/features/login.feature`;
const SERVER_URL = 'https://nuodwh-ort8y1.devcloud.automationhero.ai/';

const feature = loadFeature(PATH_TO_FEATURE);

defineFeature(feature, (test) => {
  test('Log out', () => {
  });
});
