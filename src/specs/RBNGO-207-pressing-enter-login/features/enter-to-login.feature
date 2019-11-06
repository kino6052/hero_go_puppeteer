Feature: Allow to Submit Login Screen with Enter

Scenario: Allow to Submit Login Screen with Enter
  Given We are on the log in page
  When We enter the correct credentials and url
  When We press enter
  Then We should be logged in
