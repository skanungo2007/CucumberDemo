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
  "name": "Valid Login",
  "description": "",
  "id": "guru99-functions;valid-login",
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
  "duration": 10605266700,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.title_of_the_page_is_Guru_Bank()"
});
formatter.result({
  "duration": 32243900,
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
  "duration": 495726300,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2937344000,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_verifies_Profile_ID()"
});
formatter.result({
  "duration": 85653900,
  "status": "passed"
});
formatter.match({
  "location": "Step1Practice.user_clicks_log_out()"
});
formatter.result({
  "duration": 5231754499,
  "status": "passed"
});
});