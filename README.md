# Budget App

This branch was created for a classes/object and Local Storage lesson.

## Set Up

- Clone down this repository
- Pull down this branch by running `git pull ls-lesson`

## Tasks

1. On line 15 in `script.js`, we invoke a function that adds a card. Before we do that, create an instance of a transaction. Then, pass that object to the `addCard` function.

2. Remove the two transaction cards that are hard coded into the HTML on lines `46-61`. Implement the use of a collection and local storage so that all cards are saved in storage and persist a page refresh.

3. Moving beyond storing a global array: The object stored in local storage can no longer be an array - it should be an object of key value pairs. It should include the following properties with the following data types:
  - username: string
  - totalIncome: number
  - totalExpenses: number
  - transactions: array

4. CHALLENGE: To the right of the "Transaction History" sub-title, there are two buttons that are action-less right now. When each button is clicked, the transactions associated with either "expenses" or "income" should be shown. When you're done with that, add a third button "All" - that should show all transaction cards. Next level: When the page is refreshed, the user see their most recent selection for that transaction history. A new property should be added to your object that is being stored.
