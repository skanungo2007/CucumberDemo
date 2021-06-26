Feature: Bank Login

Scenario Outline:
	Given User is on HomePage
	When Title of the page match
	Then User enters "<username>" and "<password>"
	And User clicks on Login button
	Then User verifies profile ID
	Then User clicks on New Account
	And User creates account entering "<custID>" and "<accountType>" and "<amount>"
	Then User clicks on Logout
	And User closes the browser
	
	Examples:
	|	username	|	password	|	custID	|	accountType	| 	amount	|
	|	mngr26593	|	1!			|	29840	|	Savings		|	2226	|
	| 	mngr329367	|	YpyrEda		|	35768	|	Current		|	5564	|
	|	mngr337141	|	atamynY		|	81199	|	Savings		|	4456	|