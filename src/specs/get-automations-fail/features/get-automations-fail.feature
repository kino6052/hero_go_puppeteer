Feature: Get Automations Failure

Scenario: Get Automations Failure
  Given We are logged in
  When We can't get Automations
  Then No loading screen is present