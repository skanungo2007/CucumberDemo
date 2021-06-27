Feature: Guru99 Functions

	@Valid
	Scenario: Valid Login
	Given User is on home page
	When Title of the page matches
	Then User enters the credentials "mngr26593" and "1!"
	And User clicks on Submit button
	Then User verifies Profile ID
	Then User clicks log out
	
	
	@Invalid
	Scenario: Valid Login
	Given User is on home page
	When Title of the page matches
	Then User enters credentials value "mngr26593" and "1!23"
	And User clicks on Submit button
	Then User verifies Profile ID
	Then User clicks log out
	
	
	