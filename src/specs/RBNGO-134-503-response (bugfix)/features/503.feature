Feature: 503 Error Not Causing HeroGo to Stuck

Scenario: Shouldn't get Stuck when Getting 503 Error
  Given We are logged in
  And We created a new Automation and return 503
  Then I should not see the loading screen
