Feature: Login

Scenario: Logging in with the Correct Credentials
  Given We are on the login page
  When I enter correct credentials
  And I enter working URL
  And I click on the login button
  Then I should land on the 'Automation List Page'