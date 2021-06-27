package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (
		
		features = "./src/test/java/features/loginMapsPractice.feature",
		glue = {"stepDefinition"},
		format = {"pretty", "html:test-output", "json:json_output/reportJSN.json", "junit:junit_output/reportXML.xml"},
		monochrome = true,
		dryRun = false,
		strict = true
		
		
		
		)







public class TestRunnerPractice {

}
