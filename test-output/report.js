$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/customerRegistration.feature");
formatter.feature({
  "name": "This feature would be used to add new user",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Launch the browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the mediCare application in browser",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageScenarios.i_have_opened_the_mediCare_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Sign Up link",
  "keyword": "And "
});
formatter.match({
  "location": "NewUserReg.click_on_Sign_Up_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding new customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter all customer details",
  "keyword": "When "
});
formatter.match({
  "location": "NewUserReg.user_enter_all_customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NewUserReg.click_on_Next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter sign up address details",
  "keyword": "When "
});
formatter.match({
  "location": "NewUserReg.user_enter_sign_up_address_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Next-Confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "NewUserReg.click_on_Next_Confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user details will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "NewUserReg.user_details_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "NewUserReg.click_on_confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see the confirmation message \"You can use your email address as username to login!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewUserReg.user_can_see_the_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "This feature would be used to check the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the successful Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be Landed on the products page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "kn@gmail.com",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch The browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the mediCare application in browser",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageScenarios.i_have_opened_the_mediCare_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageScenarios.click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username \"kn@gmail.com\" and password \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageScenarios.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageScenarios.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageScenarios.i_should_be_Landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Negative Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message \"Username and Password is invalid!\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "kn1@gmail.com",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch The browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the mediCare application in browser",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageScenarios.i_have_opened_the_mediCare_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageScenarios.click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Negative Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username \"kn1@gmail.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageScenarios.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageScenarios.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Username and Password is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageScenarios.i_should_get_the_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/productPurchase.feature");
formatter.feature({
  "name": "Product Purchase",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Launch the browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the mediCare application in browser",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageScenarios.i_have_opened_the_mediCare_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageScenarios.click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"kn@gmail.com\" and password as \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "PurchasePage.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "PurchasePage.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding products to the cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user click on View Products tab",
  "keyword": "When "
});
formatter.match({
  "location": "PurchasePage.user_click_on_View_Products_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on cart icon of the selected product",
  "keyword": "And "
});
formatter.match({
  "location": "PurchasePage.click_on_cart_icon_of_the_selected_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Continue shopping button",
  "keyword": "And "
});
formatter.match({
  "location": "PurchasePage.click_on_Continue_shopping_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes back to products page",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchasePage.user_goes_back_to_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on cart icon",
  "keyword": "When "
});
formatter.match({
  "location": "PurchasePage.user_click_on_cart_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "PurchasePage.click_on_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check shipping address and click on select button",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchasePage.check_shipping_address_and_click_on_select_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide Card number expiry date and CVV code",
  "keyword": "And "
});
formatter.match({
  "location": "PurchasePage.provide_Card_number_expiry_date_and_CVV_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Pay button",
  "keyword": "And "
});
formatter.match({
  "location": "PurchasePage.click_on_Pay_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get the confirmation message \"Your Order is Confirmed!!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchasePage.user_should_get_the_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});