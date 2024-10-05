const cashRegisterForm = document.getElementById("cash-register-form");
const changeDue = document.getElementById("change-due");
const denominationsDiv = document.getElementById("denominations");

cashRegisterForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const purchaseAmount = parseFloat(document.getElementById("purchase").value);
  const cash = parseFloat(document.getElementById("cash").value);
  const changeAmount = cash - purchaseAmount;

  if (purchaseAmount < 0 || cash < 0) {
    alert("Please enter valid amounts.");
    return;
  }

  if (changeAmount < 0) {
    alert("Not enough cash provided.");
    return;
  }

  displayChange(changeAmount);
});

function displayChange(changeAmount) {
  changeDue.textContent = `Change Due: ₹${changeAmount}`;
  const changeDetails = calculateDenominations(changeAmount);
  displayDenominations(changeDetails);
}

function calculateDenominations(changeAmount) {
  const denominations = {
    2000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  const availableDenominations = Object.keys(denominations).reverse();

  for (let denom of availableDenominations) {
    while (changeAmount >= denom) {
      changeAmount -= denom;
      denominations[denom]++;
    }
  }

  return denominations;
}

function displayDenominations(changeDetails) {
  let html =
    '<table class="table"><tr><th>Denomination</th><th>Count</th></tr>';

  for (const [denom, count] of Object.entries(changeDetails)) {
    if (count > 0) {
      html += `<tr><td>₹${denom}</td><td>${count}</td></tr>`;
    }
  }

  html += "</table>";
  denominationsDiv.innerHTML = html;
}
