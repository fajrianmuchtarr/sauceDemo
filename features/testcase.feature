Feature: Sauce Demo Website

  Scenario: Successful login with valid credentials
  Given User on the SauceDemo login page
  When User enter valid username and password
  Then User click the login button
  Then User should be logged in successfully

Scenario: Unsuccessful login with incorrect username
  Given User on the SauceDemo login page
  When User enter incorrect username and valid password
  And User click the login button
  Then I should see an error message indicating unsuccessful login


Scenario: Unsuccessful login with incorrect password
  Given User on the SauceDemo login page
  When User enter valid username and incorrect password
  And User click the login button
  Then I should see an error message indicating unsuccessful login

Scenario: Displayed Products
  Given User on the SauceDemo inventory page
  Then User should see a list of available products
  
Scenario: Sorting Products Ascending order
  Given User on the SauceDemo inventory page
  When User sort product by "Price low to high"
  Then the products should be displayed in ascending order of price

Scenario: Sorting Products Descending order
  Given User on the SauceDemo inventory page
  When User sort product by "Price high to low"
  Then the products should be displayed in descending order of price

  Scenario: Adding Product to Cart
    Given User on the SauceDemo inventory page
    When User add a product to the cart
    Then the product should be added successfully

  Scenario: Removing Product from Cart
    Given User on the SauceDemo inventory page
    When User add a product 2 to the cart
    And User remove the product from the cart
    Then the product should be removed successfully

  Scenario: Viewing Product Details
    Given User on the SauceDemo inventory page
    When User click on a product
    Then User should be redirected to the product details page

  Scenario: Checkout product
    Given User on the SauceDemo inventory page
    When User add a product to the cart
    And User click on the cart icon
    And User click on the checkout button
    Then User should be redirected to the checkout confirmation page

  Scenario: Checkout product without adding first name
    Given User on the SauceDemo inventory page
    When User add a product to the cart
    Then User click on the cart icon
    And User click on the checkout button
    Then User only fill last name and postal code
    And User should see an error message indicating unsuccessful checkout

  Scenario: Checkout product without adding last name
    Given User on the SauceDemo inventory page
    When User add a product 2 to the cart
    Then User click on the cart icon
    And User click on the checkout button
    Then User only fill first name and postal code     
    And User should see an error message last name is required
  
  