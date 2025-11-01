document.addEventListener('DOMContentLoaded', () => { 
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expense = [];
  let totalAmount =0;

  render();
    updateTotal();
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = expenseNameInput.value.trim();
    let amount = parseInt(expenseAmountInput.value.trim());
    expense.push({
      id: expense.length +1,
      name,
      amount
    });
    render();
    updateTotal();
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
  })

  function render() {
    expenseList.innerHTML = "";
    expense.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} - $${expense.amount}
        <button data-id="${expense.id}" class="delete-btn">Delete</button>
      `;
      expenseList.appendChild(li);
    })
  }

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < expense.length; i++) {
      total += expense[i].amount;
    }
    return total;
    
    // return expense.reduce((sum, expense) => sum + expense.amount, 0);

  }
  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }
    expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expense = expense.filter((expense) => expense.id !== expenseId);
      render();
      updateTotal();
    }
  });
});