package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Step2Practice {
	
	
	
	WebDriver driver;
	
	String driverPath = System.getProperty("user.dir") + "\\drivers\\geckodriver.exe";
	
	String url = "http://www.demo.guru99.com/V4/";
	
	@Given("^User is on HomePage$")
	public void user_is_on_HomePage() throws Throwable {
	    
		
		System.setProperty("webdriver.gecko.driver", driverPath);
		
		driver = new FirefoxDriver();
		
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		
		driver.get(url);
		
		
		Thread.sleep(1000);
	}

	@When("^Title of the page match$")
	public void title_of_the_page_match() throws Throwable {
	   
		
		String title = "Guru99 Bank Home Page";
		
		Assert.assertEquals(title, driver.getTitle());
		
		System.out.println("Title Verified");
		
	}
	
	
	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String uid, String pwd) throws Throwable {
		
		
		WebElement userID = driver.findElement(By.name("uid"));
		WebElement password = driver.findElement(By.name("password"));
		
		
		userID.sendKeys(uid);
		password.sendKeys(pwd);
		
		userID.click();
		
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() throws Throwable {
	    
		 
		WebElement login = driver.findElement(By.name("btnLogin"));
		
		login.click();
		
		Thread.sleep(1000);
		
		System.out.println("Login Success");
		
		
	}

	@Then("^User verifies profile ID$")
	public void user_verifies_profile_ID() throws Throwable {
	    
		
		WebElement mID = driver.findElement(By.xpath("//*[contains(text(), 'Manger Id :')]"));
		
		System.out.println(mID.getText());
	}
	
	
	
	@Then("^User clicks on New Account$")
	public void user_clicks_newAccount() throws Throwable {
	    
		
		WebElement account = driver.findElement(By.linkText("New Account"));
		
		account.click();
		
		System.out.println("Navigating to account creation page");
		
	}
	
	
	@And("^User creates account entering \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_creates_account(String cID, String type, String deposit) throws Throwable {
	    
		WebElement customerID = driver.findElement(By.cssSelector("input[name='cusid']"));
		WebElement acntType = driver.findElement(By.name("selaccount"));
		WebElement amount = driver.findElement(By.xpath("//input[@name='inideposit']"));
		WebElement submit = driver.findElement(By.name("button2"));
		
		
		customerID.sendKeys(cID);
		
		
		Select dropdown = new Select(acntType);
		dropdown.selectByVisibleText(type);
		
		amount.sendKeys(deposit);
		
		submit.click();
		
		Thread.sleep(1000);
		
		
		WebElement values = driver.findElement(By.xpath("//table[@id='account']/tbody"));
		
		System.out.println(values.getText());
		
		
		
	}
	
	
	

	@Then("^User clicks on Logout$")
	public void user_clicks_on_Logout() throws Throwable {
	   
		WebElement log = driver.findElement(By.linkText("Log out"));
		
		log.click();
		
		
		Thread.sleep(500);
		
		Alert alert = driver.switchTo().alert();
		
		System.out.println(alert.getText());
		
		alert.accept();
		
	}

	@Then("^User closes the browser$")
	public void user_closes_the_browser() throws Throwable {
	    
		System.out.println("Closing browser");
		
		Thread.sleep(2000);
		
		driver.quit();
		
	}

}
