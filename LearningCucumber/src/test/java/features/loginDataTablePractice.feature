Feature: Bank Login via Data Table

Scenario: Cheking flow with Data Table

	Given User is on Bank HomePage
	When Title of the page is verified
	Then User enters username and password using data table
	|	mngr26593	|	1!	|
	And User click on Login button
	Then User verifies the profile ID
	Then User clicks on New Account link
	And User creates account entering by giving details
	|	29840	|	Savings		|	2226	|
	Then User clicks on Logout link
	And User closes the Browser