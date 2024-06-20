Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given I am on the Zoro login page
    When I click on login button.
    When I enter the username "zoro.test@gmail.com"
    And I enter the password "Password123!"
    And I click on the "Login" button
    Then I should be redirected to the account dashboard
    And I should see a welcome message "Welcome, Zoro Test"

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the Zoro login page
    When I enter the username "zoro.test@gmail.com"
    And I enter the password "WrongPassword!"
    And I click on the "Login" button
    Then I should see an error message "Invalid username or password"
    And I should remain on the login page
