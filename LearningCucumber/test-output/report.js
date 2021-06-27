$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/loginPractice.feature");
formatter.feature({
  "line": 1,
  "name": "Guru99 Functions",
  "description": "",
  "id": "guru99-functions",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Valid login check",
  "description": "",
  "id": "guru99-functions;valid-login-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page matches",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the credentials \"mngr26593\" and \"1!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies Profile ID",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks log out",
  "keyword": "Then "
});
formatter.match({
  "location": "Step1Practice.user_is_on_home_page()"
});
formatter.result({
  "duration": 13267286200,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.title_of_the_page_is_Guru_Bank()"
});
formatter.result({
  "duration": 25201399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr26593",
      "offset": 29
    },
    {
      "val": "1!",
      "offset": 45
    }
  ],
  "location": "Step1Practice.user_enters_the_credentials_and(String,String)"
});
formatter.result({
  "duration": 512172801,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2687412200,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_verifies_Profile_ID()"
});
formatter.result({
  "duration": 83380799,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_clicks_log_out()"
});
formatter.result({
  "duration": 4801786200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Valid login check Second Scenario",
  "description": "",
  "id": "guru99-functions;valid-login-check-second-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on home page for Second Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Title of the page matches for Second Scenario",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters the credentials for Second scenario \"mngr329367\" and \"YpyrEda\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Submit button in Second Scenario",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User verifies Profile ID in Second Scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks log out and validates Second scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "Step1Practice.user_is_on_home_page_for_Second_Scenario()"
});
formatter.result({
  "duration": 8713817800,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.title_of_the_page_matches_for_Second_Scenario()"
});
formatter.result({
  "duration": 22039199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr329367",
      "offset": 49
    },
    {
      "val": "YpyrEda",
      "offset": 66
    }
  ],
  "location": "Step1Practice.user_enters_the_credentials_for_Second_scenario_and(String,String)"
});
formatter.result({
  "duration": 514142500,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_clicks_on_Submit_button_in_Second_Scenario()"
});
formatter.result({
  "duration": 2692920600,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_verifies_Profile_ID_in_Second_Scenario()"
});
formatter.result({
  "duration": 71490701,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_clicks_log_out_and_validates_Second_scenario()"
});
formatter.result({
  "duration": 5278750400,
  "status": "passed"
});
});