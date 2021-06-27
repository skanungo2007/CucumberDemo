package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Step3PracticeDataTable {
	
	WebDriver driver;
	
	String driverPath = System.getProperty("user.dir") + "\\drivers\\geckodriver.exe";
	
	String url = "http://www.demo.guru99.com/V4/";
	
	
	@Given("^User is on Bank HomePage$")
	public void user_is_on_Bank_HomePage() throws Throwable {
	   
		System.setProperty("webdriver.gecko.driver", driverPath);
		
		driver = new FirefoxDriver();
		
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		
		driver.get(url);
		
		Thread.sleep(1000);
		
	}

	@When("^Title of the page is verified$")
	public void title_of_the_page_is_verified() throws Throwable {

		
		String title = "Guru99 Bank Home Page";
		
		Assert.assertEquals(title, driver.getTitle());
		
		System.out.println("Title Verified");
		
	}

	@Then("^User enters username and password using data table$")
	public void user_enters_username_and_password_using_data_table(DataTable credentials) throws Throwable {
		
		//We need to store the raw data in List of List of String which gives access to the data table
		List<List<String>> dataLogin = credentials.raw();
		
		
		WebElement userID = driver.findElement(By.name("uid"));
		WebElement password = driver.findElement(By.name("password"));
		
		
		//get 0 row and 0 column
		userID.sendKeys(dataLogin.get(0).get(0));
		
		//get 0 row and 1 column
		password.sendKeys(dataLogin.get(0).get(1));
		
		
	}

	@Then("^User click on Login button$")
	public void user_click_on_Login_button() throws Throwable {
	    
		
		 
		WebElement login = driver.findElement(By.name("btnLogin"));
		
		login.click();
		
		Thread.sleep(1000);
		
		System.out.println("Login Success");
		
	}

	@Then("^User verifies the profile ID$")
	public void user_verifies_the_profile_ID() throws Throwable {
	    
		
		WebElement mID = driver.findElement(By.xpath("//*[contains(text(), 'Manger Id :')]"));
		
		System.out.println(mID.getText());
		
		
	}

	@Then("^User clicks on New Account link$")
	public void user_clicks_on_New_Account_link() throws Throwable {
	   
		WebElement account = driver.findElement(By.linkText("New Account"));
		
		account.click();
		
		System.out.println("Navigating to account creation page");
		
		
	}

	@Then("^User creates account entering by giving details$")
	public void user_creates_account_entering_by_giving_details(DataTable accountData) throws Throwable {
		
		WebElement customerID = driver.findElement(By.cssSelector("input[name='cusid']"));
		WebElement acntType = driver.findElement(By.name("selaccount"));
		WebElement amount = driver.findElement(By.xpath("//input[@name='inideposit']"));
		WebElement submit = driver.findElement(By.name("button2"));
		
		
	   
		List<List<String>> accountValue = accountData.raw();
		
		customerID.sendKeys(accountValue.get(0).get(0));
		acntType.sendKeys(accountValue.get(0).get(1));
		amount.sendKeys(accountValue.get(0).get(2));
		
		submit.click();
		
		
		Thread.sleep(1000);
		
		
		WebElement values = driver.findElement(By.xpath("//table[@id='account']/tbody"));
		
		System.out.println(values.getText());
		
	}

	@Then("^User clicks on Logout link$")
	public void user_clicks_on_Logout_link() throws Throwable {



		WebElement log = driver.findElement(By.linkText("Log out"));
		
		log.click();
		
		
		Thread.sleep(500);
		
		Alert alert = driver.switchTo().alert();
		
		System.out.println(alert.getText());
		
		alert.accept();
		
		
	}

	
	
	@Then("^User closes the Browser$")
	public void user_closes_the_Browser() throws Throwable {
	    
		
		
		System.out.println("Closing browser");
		
		Thread.sleep(2000);
		
		driver.quit();
	}

}
