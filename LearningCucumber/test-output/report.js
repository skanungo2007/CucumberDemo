$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/loginDataTablePractice.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Login via Data Table",
  "description": "",
  "id": "bank-login-via-data-table",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cheking flow with Data Table",
  "description": "",
  "id": "bank-login-via-data-table;cheking-flow-with-data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Bank HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is verified",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password using data table",
  "rows": [
    {
      "cells": [
        "mngr26593",
        "1!"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User verifies the profile ID",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on New Account link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User creates account entering by giving details",
  "rows": [
    {
      "cells": [
        "29840",
        "Savings",
        "2226"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User closes the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step3PracticeDataTable.user_is_on_Bank_HomePage()"
});
formatter.result({
  "duration": 11891000400,
  "status": "passed"
});
formatter.match({
  "location": "Step3PracticeDataTable.title_of_the_page_is_verified()"
});
formatter.result({
  "duration": 21846200,
  "status": "passed"
});
formatter.match({
  "location": "Step3PracticeDataTable.user_enters_username_and_password_using_data_table(DataTable)"
});
formatter.result({
  "duration": 235166900,
  "status": "passed"
});
formatter.match({
  "location": "Step3PracticeDataTable.user_click_on_Login_button()"
});
formatter.result({
  "duration": 3294788900,
  "status": "passed"
});
formatter.match({
  "location": "Step3PracticeDataTable.user_verifies_the_profile_ID()"
});
formatter.result({
  "duration": 95852000,
  "status": "passed"
});
formatter.match({
  "location": "Step3PracticeDataTable.user_clicks_on_New_Account_link()"
});
formatter.result({
  "duration": 765395100,
  "status": "passed"
});
formatter.match({
  "location": "Step3PracticeDataTable.user_creates_account_entering_by_giving_details(DataTable)"
});
formatter.result({
  "duration": 3093152800,
  "status": "passed"
});
formatter.match({
  "location": "Step3PracticeDataTable.user_clicks_on_Logout_link()"
});
formatter.result({
  "duration": 2796478101,
  "status": "passed"
});
formatter.match({
  "location": "Step3PracticeDataTable.user_closes_the_Browser()"
});
formatter.result({
  "duration": 3545169600,
  "status": "passed"
});
});