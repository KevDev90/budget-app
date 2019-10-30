var form = document.querySelector('form');
var inputs = document.querySelectorAll('.typed-input');
var cards = document.querySelector('.account-cards');
var transactionArray = [];
var buttonDiv = document.querySelector('.buttons');


form.addEventListener('submit', addPastTransaction);
buttonDiv.addEventListener('click', showTypeOfTransaction);


window.onload = checkLocalStorage();

function checkLocalStorage() {
  if (localStorage) {
    for (var i = 0; i < localStorage.length; i++) {
      var id = localStorage.key(i);
      var item = JSON.parse(localStorage.getItem(id));
      item = new Transaction(item.type, item.payee, item.amount, item.category, item.id);
      addCard(item);
      transactionArray.push(item);
    }
  }
}

function addCard(newTransaction) {
  cards.innerHTML += `
    <section id=${newTransaction.id} class="account-card">
      <img class="account-icon" src="./assets/${newTransaction.type}.svg" alt="Expenses Icon">
      <div class="account-title">
        <h3>${newTransaction.payee}</h3>
      </div>
      <p>${newTransaction.category}</p>
      <h4>$${newTransaction.amount}</h4>
    </section>
  `;
}

function instantiateCard() {
  var type = inputs[0].value;
  var payee = inputs[2].value;
  var amount = inputs[3].value;
  var category = inputs[4].value;
  var pastTransaction = new Transaction(type, payee, amount, category);
  transactionArray.push(pastTransaction);
  return pastTransaction
}

function addPastTransaction(event) {
  event.preventDefault()
  var newTransaction = instantiateCard();
  addCard(newTransaction);
  newTransaction.saveToStorage();
}

function showTypeOfTransaction(event) {
  if(event.target.classList.contains('expenses-btn')) {
     showExpenses()
   }
  if(event.target.classList.contains('income-btn')) {
      showIncome()
   }
}

function showExpenses() {
  cards.innerHTML = '';
  var filter = function filterByValue(transactionArray, expenses) {
 return transactionArray.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(expenses.toLowerCase())));
}
  addCard(filter);
}

//
// function showIncome() {
//
// }

// When each button is clicked, the transactions associated with either "expenses" or "income" should be shown. When you're done with that, add a third button "All" - that should show all transaction cards.
