Feature: Registration Flow

  Scenario: Registering as a business user
    Given I navigate to "https://zoro.co.uk"
    When I click on the "Login/Register" button
    And I click on the "Create Account" button
    Then I should see a window with options for account type
    When I select "I’m buying for a business"
    And I choose "I am looking to open a business account for me and my team members"
    Then I should see the "Primary Contact Details" form
    When I fill in the following details:
      | Title              | Mr              |
      | First Name         | John            |
      | Last Name          | Doe             |
      | Email Address      | zoro.test@gmail.com |
      | Phone Number       | 01234567890     |
      | Company Name       | Zoro Test Ltd   |
      | Job Title          | Manager         |
      | Company Reg No     | 12345678        |
    And I select "Yes" for "Would you like to buy on credit (30 days end of month terms)?"
    And I select "Yes" for "Would you like to add additional users to your account?"
    Then I should be able to proceed with the registration

  Scenario: Registering as a personal user
    Given I navigate to "https://zoro.co.uk"
    When I click on the "Login/Register" button
    And I click on the "Create Account" button
    Then I should see a window with options for account type
    When I select "I’m buying for myself"
    And I choose "I’m not buying for a business or commercial reasons and want to open a standard account"
    Then I should see the "Primary Contact Details" form
    When I fill in the following details:
      | Title         | Mr              |
      | First Name    | John            |
      | Last Name     | Doe             |
      | Email Address | zoro.test@gmail.com |
      | Phone Number  | 01234567890     |
    And I click on the "Continue" button
    Then I should be able to proceed with the registration
