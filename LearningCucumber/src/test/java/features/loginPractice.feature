Feature: Guru99 Functions

	@Valid
	Scenario: Valid login check 
	Given User is on home page
	When Title of the page matches
	Then User enters the credentials "mngr26593" and "1!"
	And User clicks on Submit button
	Then User verifies Profile ID
	Then User clicks log out
	
	
	
	@Valid
	Scenario: Valid login check Second Scenario
	Given User is on home page for Second Scenario
	When Title of the page matches for Second Scenario
	Then User enters the credentials for Second scenario "mngr329367" and "YpyrEda"
	And User clicks on Submit button in Second Scenario
	Then User verifies Profile ID in Second Scenario
	Then User clicks log out and validates Second scenario
	
	
	
	
	
	
	
	@Invalid
	Scenario: Valid Login
	Given User is on home page
	When Title of the page matches
	Then User enters credentials value "mngr26593" and "1!23"
	And User clicks on Submit button
	Then User verifies Profile ID
	Then User clicks log out
	
	
	