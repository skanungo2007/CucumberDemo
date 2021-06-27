$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/loginMapsPractice.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Login via Maps",
  "description": "",
  "id": "bank-login-via-maps",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cheking flow with Maps",
  "description": "",
  "id": "bank-login-via-maps;cheking-flow-with-maps",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Bank Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title for the page is verified",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password using Maps feature",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "mngr26593",
        "1!"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click on Login button and waits",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User verifies the login profile ID",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on New Account creation link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User creates account entering by giving all details",
  "rows": [
    {
      "cells": [
        "custID",
        "AccountType",
        "Amount"
      ],
      "line": 15
    },
    {
      "cells": [
        "29840",
        "Savings",
        "2226"
      ],
      "line": 16
    },
    {
      "cells": [
        "77008",
        "Current",
        "5564"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on Logout link and waits",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User closes the Browser and exits",
  "keyword": "And "
});
formatter.match({
  "location": "Step4PracticeMaps.user_is_on_Bank_Home_Page()"
});
formatter.result({
  "duration": 10651058199,
  "status": "passed"
});
formatter.match({
  "location": "Step4PracticeMaps.title_for_the_page_is_verified()"
});
formatter.result({
  "duration": 29748799,
  "status": "passed"
});
formatter.match({
  "location": "Step4PracticeMaps.user_enters_username_and_password_using_Maps_feature(DataTable)"
});
formatter.result({
  "duration": 237201500,
  "status": "passed"
});
formatter.match({
  "location": "Step4PracticeMaps.user_click_on_Login_button_and_waits()"
});
formatter.result({
  "duration": 2752099601,
  "status": "passed"
});
formatter.match({
  "location": "Step4PracticeMaps.user_verifies_the_login_profile_ID()"
});
formatter.result({
  "duration": 68543700,
  "status": "passed"
});
formatter.match({
  "location": "Step4PracticeMaps.user_clicks_on_New_Account_creation_link()"
});
formatter.result({
  "duration": 680684100,
  "status": "passed"
});
formatter.match({
  "location": "Step4PracticeMaps.user_creates_account_entering_by_giving_all_details(DataTable)"
});
formatter.result({
  "duration": 12192124700,
  "status": "passed"
});
formatter.match({
  "location": "Step4PracticeMaps.user_clicks_on_Logout_link_and_waits()"
});
formatter.result({
  "duration": 1983960699,
  "status": "passed"
});
formatter.match({
  "location": "Step4PracticeMaps.user_closes_the_Browser_and_exits()"
});
formatter.result({
  "duration": 3059693000,
  "status": "passed"
});
});