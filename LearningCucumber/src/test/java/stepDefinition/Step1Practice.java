package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Step1Practice {
	
	WebDriver driver;
	
	String driverPath = System.getProperty("user.dir") + "\\drivers\\geckodriver.exe";
	
	String url = "http://www.demo.guru99.com/V4/";
	
//	//String userID = "mngr26593";
//	//String password = "ishal!12";
	
	
	
	@Given("^User is on home page$")
	public void user_is_on_home_page() throws InterruptedException {
	    
		System.setProperty("webdriver.gecko.driver", driverPath);
		
		driver = new FirefoxDriver();
		
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		
		driver.get(url);
		
		
		Thread.sleep(1000);

		
	}

	@When("^Title of the page matches$")
	public void title_of_the_page_is_Guru_Bank() {
	    
		String title = "Guru99 Bank Home Page";
		
		Assert.assertEquals(title, driver.getTitle());
		
		System.out.println("Title Verified");
		
		
	}

	/*
	@Then("^User enters credentials \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_credentials(String uid, String pwd) {
	    
		WebElement userID = driver.findElement(By.name("uid"));
		WebElement password = driver.findElement(By.name("password"));
		
		
		userID.sendKeys(uid);
		password.sendKeys(pwd);
		
		userID.click();
		
	
	}
	*/
	
	@Then("^User enters the credentials \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_credentials_and(String uid, String pwd) throws Throwable {
	    
		
		WebElement userID = driver.findElement(By.name("uid"));
		WebElement password = driver.findElement(By.name("password"));
		
		
		userID.sendKeys(uid);
		password.sendKeys(pwd);
		
		userID.click();
	}
	
	
	

	@Then("^User clicks on Submit button$")
	public void user_clicks_on_Submit_button() throws InterruptedException {
	    
		WebElement login = driver.findElement(By.name("btnLogin"));
		
		login.click();
		
		Thread.sleep(1000);
		
		System.out.println("Login Success");
		
		
		
	}


	@Then("^User verifies Profile ID$")
	public void user_verifies_Profile_ID() {


		WebElement mID = driver.findElement(By.xpath("//*[contains(text(), 'Manger Id :')]"));
		
		System.out.println(mID.getText());
		
		
	}

	@Then("^User clicks log out$")
	public void user_clicks_log_out() throws InterruptedException {
	   
		WebElement log = driver.findElement(By.linkText("Log out"));
		
		log.click();
		
		
		Thread.sleep(500);
		
		Alert alert = driver.switchTo().alert();
		
		System.out.println(alert.getText());
		
		alert.accept();
		
		Thread.sleep(2000);
		
		driver.quit();
	}

	
	@Given("^User is on home page for Second Scenario$")
	public void user_is_on_home_page_for_Second_Scenario() throws Throwable {
	    
		
		System.setProperty("webdriver.gecko.driver", driverPath);
		
		driver = new FirefoxDriver();
		
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		
		driver.get(url);
		
		
		Thread.sleep(1000);

	}
	
	
	@When("^Title of the page matches for Second Scenario$")
	public void title_of_the_page_matches_for_Second_Scenario() {
	    
		String title = "Guru99 Bank Home Page";
		
		Assert.assertEquals(title, driver.getTitle());
		
		System.out.println("Title Verified");
		
		
	}
	
	
	@Then("^User enters the credentials for Second scenario \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_credentials_for_Second_scenario_and(String uid2, String pwd2) throws Throwable {
	   
		
		
		WebElement userID = driver.findElement(By.name("uid"));
		WebElement password = driver.findElement(By.name("password"));
		
		
		userID.sendKeys(uid2);
		password.sendKeys(pwd2);
		
		userID.click();
	}
		
	

	@Then("^User clicks on Submit button in Second Scenario$")
	public void user_clicks_on_Submit_button_in_Second_Scenario() throws Throwable {
	    
		

		WebElement login = driver.findElement(By.name("btnLogin"));
		
		login.click();
		
		Thread.sleep(1000);
		
		System.out.println("Login Success");
		
		
	}
	
	
	@Then("^User verifies Profile ID in Second Scenario$")
	public void user_verifies_Profile_ID_in_Second_Scenario() throws Throwable {
	   
		
		WebElement mID = driver.findElement(By.xpath("//*[contains(text(), 'Manger Id :')]"));
		
		System.out.println(mID.getText());
		
	}
	
	@Then("^User clicks log out and validates Second scenario$")
	public void user_clicks_log_out_and_validates_Second_scenario() throws Throwable {
	    
		
		WebElement log = driver.findElement(By.linkText("Log out"));
		
		log.click();
		
		
		Thread.sleep(500);
		
		Alert alert = driver.switchTo().alert();
		
		System.out.println(alert.getText());
		
		alert.accept();
		
		Thread.sleep(2000);
		
		driver.quit();
	}
	
		

}
