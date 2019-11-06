Feature: Get Actions Failure

Scenario: Get Actions Failure
  Given We are logged in
  When We create an automation
  And We transition to the action list page
  And Error is returned
  Then No loading screen is present