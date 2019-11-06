/**
 * This is the list of the names of features to test.
 * You can comment, add, remove them as you see fit.
 */

const sprint009 = [
  "RBNGO-134-503-response (bugfix)",
  "RBNGO-205-land-on-edit (bugfix)",
  "RBNGO-207-pressing-enter-login"
];

const general = [
  "login",
  "get-automations-fail",
  "get-actions-fail"
];

module.exports = [
  ...general,
  ...sprint009
];

module.exports.heroGoPath = './hero_go';
