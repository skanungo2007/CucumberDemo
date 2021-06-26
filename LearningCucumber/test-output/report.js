$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/LoginPracticeScenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Login",
  "description": "",
  "id": "bank-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "",
  "id": "bank-login;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page match",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies profile ID",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on New Account",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User creates account entering \"\u003ccustID\u003e\" and \"\u003caccountType\u003e\" and \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "bank-login;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "custID",
        "accountType",
        "amount"
      ],
      "line": 15,
      "id": "bank-login;;;1"
    },
    {
      "cells": [
        "mngr26593",
        "1!",
        "29840",
        "Savings",
        "2226"
      ],
      "line": 16,
      "id": "bank-login;;;2"
    },
    {
      "cells": [
        "mngr329367",
        "YpyrEda",
        "78850",
        "Current",
        "5564"
      ],
      "line": 17,
      "id": "bank-login;;;3"
    },
    {
      "cells": [
        "mngr337141",
        "atamynY",
        "55390",
        "Savings",
        "4456"
      ],
      "line": 18,
      "id": "bank-login;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "bank-login;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page match",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"mngr26593\" and \"1!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies profile ID",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on New Account",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User creates account entering \"29840\" and \"Savings\" and \"2226\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step2Practice.user_is_on_HomePage()"
});
formatter.result({
  "duration": 10794772100,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.title_of_the_page_match()"
});
formatter.result({
  "duration": 45180300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr26593",
      "offset": 13
    },
    {
      "val": "1!",
      "offset": 29
    }
  ],
  "location": "Step2Practice.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 586147400,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3218411700,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_verifies_profile_ID()"
});
formatter.result({
  "duration": 157663000,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_newAccount()"
});
formatter.result({
  "duration": 946980900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29840",
      "offset": 31
    },
    {
      "val": "Savings",
      "offset": 43
    },
    {
      "val": "2226",
      "offset": 57
    }
  ],
  "location": "Step2Practice.user_creates_account(String,String,String)"
});
formatter.result({
  "duration": 3302458800,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_on_Logout()"
});
formatter.result({
  "duration": 2861607200,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_closes_the_browser()"
});
formatter.result({
  "duration": 3371570900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "bank-login;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page match",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"mngr329367\" and \"YpyrEda\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies profile ID",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on New Account",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User creates account entering \"78850\" and \"Current\" and \"5564\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step2Practice.user_is_on_HomePage()"
});
formatter.result({
  "duration": 8964434100,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.title_of_the_page_match()"
});
formatter.result({
  "duration": 36216300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr329367",
      "offset": 13
    },
    {
      "val": "YpyrEda",
      "offset": 30
    }
  ],
  "location": "Step2Practice.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 574442000,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3148296200,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_verifies_profile_ID()"
});
formatter.result({
  "duration": 156326400,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_newAccount()"
});
formatter.result({
  "duration": 815111400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "78850",
      "offset": 31
    },
    {
      "val": "Current",
      "offset": 43
    },
    {
      "val": "5564",
      "offset": 57
    }
  ],
  "location": "Step2Practice.user_creates_account(String,String,String)"
});
formatter.result({
  "duration": 2575110800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Dismissed user prompt dialog: You are not authorize to Add Account for this Customer: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHADEEPLAPTOP\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210614221319, moz:geckodriverVersion: 0.29.1, moz:headless: false, moz:processID: 13660, moz:profile: C:\\Users\\skanu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d2fa9e8e-4286-4446-bbd9-69f2d7f06152\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027account\u0027]/tbody}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.Step2Practice.user_creates_account(Step2Practice.java:135)\r\n\tat ✽.And User creates account entering \"78850\" and \"Current\" and \"5564\"(./src/test/java/features/LoginPracticeScenarioOutline.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step2Practice.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "bank-login;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page match",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"mngr337141\" and \"atamynY\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies profile ID",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on New Account",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User creates account entering \"55390\" and \"Savings\" and \"4456\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step2Practice.user_is_on_HomePage()"
});
formatter.result({
  "duration": 8869828500,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.title_of_the_page_match()"
});
formatter.result({
  "duration": 49014500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr337141",
      "offset": 13
    },
    {
      "val": "atamynY",
      "offset": 30
    }
  ],
  "location": "Step2Practice.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 547128800,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3429469600,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_verifies_profile_ID()"
});
formatter.result({
  "duration": 171849500,
  "status": "passed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_newAccount()"
});
formatter.result({
  "duration": 1118670700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55390",
      "offset": 31
    },
    {
      "val": "Savings",
      "offset": 43
    },
    {
      "val": "4456",
      "offset": 57
    }
  ],
  "location": "Step2Practice.user_creates_account(String,String,String)"
});
formatter.result({
  "duration": 2083050500,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Dismissed user prompt dialog: You are not authorize to Add Account for this Customer: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHADEEPLAPTOP\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210614221319, moz:geckodriverVersion: 0.29.1, moz:headless: false, moz:processID: 6536, moz:profile: C:\\Users\\skanu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e9e17642-94de-4eff-bd7b-3642843f8ebd\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027account\u0027]/tbody}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.Step2Practice.user_creates_account(Step2Practice.java:135)\r\n\tat ✽.And User creates account entering \"55390\" and \"Savings\" and \"4456\"(./src/test/java/features/LoginPracticeScenarioOutline.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step2Practice.user_clicks_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step2Practice.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});