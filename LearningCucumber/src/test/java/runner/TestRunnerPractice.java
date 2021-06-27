package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (
		
		//To run different step definition change the path of the feature file here
		
		features = "./src/test/java/features/LoginHooksPractice.feature",
		glue = {"stepDefinition"},
		format = {"pretty", "html:test-output", "json:json_output/reportJSN.json", "junit:junit_output/reportXML.xml"},
		monochrome = true,
		dryRun = false,
		strict = true,
		tags = {"@ValidCheck, @ValidLogin, ~@Invalid"}

		
		)


public class TestRunnerPractice {

}
