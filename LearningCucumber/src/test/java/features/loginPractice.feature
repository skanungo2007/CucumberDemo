Feature: Guru99 Functions

	Scenario: Valid Login
	Given User is on home page
	When Title of the page matches
	Then User enters "mngr26593" and "1!"
	And User clicks on Submit button
	Then User verifies Profile ID
	Then User clicks log out
	
	
	
	