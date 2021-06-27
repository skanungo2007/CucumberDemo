Feature: Bank Login via Maps

Scenario: Cheking flow with Maps

	Given User is on Bank Home Page
	When Title for the page is verified
	Then User enters username and password using Maps feature
	|	username	|	password	|
	|	mngr26593	|	1!	 		|
	
	And User click on Login button and waits
	Then User verifies the login profile ID
	Then User clicks on New Account creation link
	And User creates account entering by giving all details
	|	custID	|	AccountType	|	Amount	|
	|	29840	|	Savings		|	2226	|
	|	77008	|	Current		|	5564	|
	Then User clicks on Logout link and waits
	And User closes the Browser and exits