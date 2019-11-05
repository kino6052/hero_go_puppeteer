Feature: Should Land on Edit When Creating an Automation

Scenario: Should Land on Edit When Creating an Automation
  Given We are logged in
  When We created a new automation 
  Then I should land on the automation page in edit mode
