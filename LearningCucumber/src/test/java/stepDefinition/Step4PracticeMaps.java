package stepDefinition;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Step4PracticeMaps {
	
	WebDriver driver;
	
	String driverPath = System.getProperty("user.dir") + "\\drivers\\geckodriver.exe";
	
	String url = "http://www.demo.guru99.com/V4/";
	
	
	@Given("^User is on Bank Home Page$")
	public void user_is_on_Bank_Home_Page() throws Throwable {
	    
		
		System.setProperty("webdriver.gecko.driver", driverPath);
		
		driver = new FirefoxDriver();
		
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		
		driver.get(url);
		
		Thread.sleep(1000);
		
		
	}

	@When("^Title for the page is verified$")
	public void title_for_the_page_is_verified() throws Throwable {
	    
		
		String title = "Guru99 Bank Home Page";
		
		Assert.assertEquals(title, driver.getTitle());
		
		System.out.println("Title Verified");
		
		
	}

	@Then("^User enters username and password using Maps feature$")
	public void user_enters_username_and_password_using_Maps_feature(DataTable credentialLogin) throws Throwable {
	    
		
		WebElement userID = driver.findElement(By.name("uid"));
		WebElement password = driver.findElement(By.name("password"));
		
		
		for(Map<String, String> loginData : credentialLogin.asMaps(String.class, String.class)) {
			
			userID.sendKeys(loginData.get("username"));
			password.sendKeys(loginData.get("password"));
			
		};
	
		
	}

	
	
	@Then("^User click on Login button and waits$")
	public void user_click_on_Login_button_and_waits() throws Throwable {
	   
		
		
		WebElement login = driver.findElement(By.name("btnLogin"));
		
		login.click();
		
		Thread.sleep(1000);
		
		System.out.println("Login Success");
		
	}

	@Then("^User verifies the login profile ID$")
	public void user_verifies_the_login_profile_ID() throws Throwable {
	    
		
		WebElement mID = driver.findElement(By.xpath("//*[contains(text(), 'Manger Id :')]"));
		
		System.out.println(mID.getText());
		
	}
	

	@Then("^User clicks on New Account creation link$")
	public void user_clicks_on_New_Account_creation_link() throws Throwable {
	    
		
		WebElement account = driver.findElement(By.linkText("New Account"));
		
		account.click();
		
		System.out.println("Navigating to account creation page");
		
		
	}

	@Then("^User creates account entering by giving all details$")
	public void user_creates_account_entering_by_giving_all_details(DataTable accountDetails) throws Throwable {
	    
		
		for(Map<String, String> accountValues: accountDetails.asMaps(String.class, String.class)) {
			
			
			WebElement customerID = driver.findElement(By.cssSelector("input[name='cusid']"));
			WebElement acntType = driver.findElement(By.name("selaccount"));
			WebElement amount = driver.findElement(By.xpath("//input[@name='inideposit']"));
			WebElement submit = driver.findElement(By.name("button2"));
			
			
			
			customerID.sendKeys(accountValues.get("custID"));
			acntType.sendKeys(accountValues.get("AccountType"));
			amount.sendKeys(accountValues.get("Amount"));
		
			submit.click();
			
		
			WebElement values = driver.findElement(By.xpath("//table[@id='account']/tbody"));
			
			System.out.println(values.getText());
			
			Thread.sleep(2000);
			
			WebElement cont = driver.findElement(By.xpath("//table[@id='Accmsg']//table[@id='account']//tr[11]/td/a[@href='Managerhomepage.php']"));
			
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].click();", cont);
			
			Thread.sleep(2000);
			
			
			WebElement account = driver.findElement(By.linkText("New Account"));
			js.executeScript("arguments[0].click();", account);
			
		}
		
		
		
		
		
	
	}

	
	
	@Then("^User clicks on Logout link and waits$")
	public void user_clicks_on_Logout_link_and_waits() throws Throwable {
	    
		
		WebElement log = driver.findElement(By.linkText("Log out"));
		
		log.click();
		
		
		Thread.sleep(500);
		
		Alert alert = driver.switchTo().alert();
		
		System.out.println(alert.getText());
		
		alert.accept();
		
	}

	
	
	@Then("^User closes the Browser and exits$")
	public void user_closes_the_Browser_and_exits() throws Throwable {
	   
		
		System.out.println("Closing browser");
		
		Thread.sleep(2000);
		
		driver.quit();
	}

}
