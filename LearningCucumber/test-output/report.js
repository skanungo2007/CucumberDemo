$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/LoginHooksPractice.feature");
formatter.feature({
  "line": 1,
  "name": "Guru99 Functions",
  "description": "",
  "id": "guru99-functions",
  "keyword": "Feature"
});
formatter.before({
  "duration": 290100,
  "status": "passed"
});
formatter.before({
  "duration": 9647669099,
  "status": "passed"
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
      "name": "@ValidCheck"
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
  "location": "Step5PracticeHooks.user_is_on_home_page()"
});
formatter.result({
  "duration": 2744850600,
  "status": "passed"
});
formatter.match({
  "location": "Step5PracticeHooks.title_of_the_page_is_Guru_Bank()"
});
formatter.result({
  "duration": 29165000,
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
  "location": "Step5PracticeHooks.user_enters_the_credentials_and(String,String)"
});
formatter.result({
  "duration": 478586101,
  "status": "passed"
});
formatter.match({
  "location": "Step5PracticeHooks.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2898712800,
  "status": "passed"
});
formatter.match({
  "location": "Step5PracticeHooks.user_verifies_Profile_ID()"
});
formatter.result({
  "duration": 96893800,
  "status": "passed"
});
formatter.match({
  "location": "Step5PracticeHooks.user_clicks_log_out()"
});
formatter.result({
  "duration": 4062711100,
  "status": "passed"
});
formatter.after({
  "duration": 296501,
  "status": "passed"
});
formatter.after({
  "duration": 978136700,
  "status": "passed"
});
formatter.before({
  "duration": 164100,
  "status": "passed"
});
formatter.before({
  "duration": 7890463900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Valid login check Second Scenario",
  "description": "",
  "id": "guru99-functions;valid-login-check-second-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@ValidLogin"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on home page for Second Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Title of the page matches for Second Scenario",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the credentials for Second scenario \"mngr329367\" and \"YpyrEda\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Submit button in Second Scenario",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User verifies Profile ID in Second Scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks log out and validates Second scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "Step5PracticeHooks.user_is_on_home_page_for_Second_Scenario()"
});
formatter.result({
  "duration": 1040916199,
  "status": "passed"
});
formatter.match({
  "location": "Step5PracticeHooks.title_of_the_page_matches_for_Second_Scenario()"
});
formatter.result({
  "duration": 15953800,
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
  "location": "Step5PracticeHooks.user_enters_the_credentials_for_Second_scenario_and(String,String)"
});
formatter.result({
  "duration": 462263099,
  "status": "passed"
});
formatter.match({
  "location": "Step5PracticeHooks.user_clicks_on_Submit_button_in_Second_Scenario()"
});
formatter.result({
  "duration": 2902150800,
  "status": "passed"
});
formatter.match({
  "location": "Step5PracticeHooks.user_verifies_Profile_ID_in_Second_Scenario()"
});
formatter.result({
  "duration": 82798900,
  "status": "passed"
});
formatter.match({
  "location": "Step5PracticeHooks.user_clicks_log_out_and_validates_Second_scenario()"
});
formatter.result({
  "duration": 1601729199,
  "status": "passed"
});
formatter.after({
  "duration": 1071017800,
  "status": "passed"
});
formatter.after({
  "duration": 280301,
  "status": "passed"
});
});