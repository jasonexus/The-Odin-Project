// Get DOM elements

const display = document.getElementById("calc-display");
const clearButton = document.getElementById("clear");
const operatorButtons = document.querySelectorAll(".operators");
const numberButtons = document.querySelectorAll(".numbers");
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById("delete");

// Step 1 - Initialize variables
let num1 = "";
let num2 = "";
let operator = "";
let value = "";
let displayValue = "";
let secondTemp = "";

// Step 2 - Create functions for all of the operators
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    alert("Cannot divide by 0");
    throw new Error("Cannot divide by 0");
  } else {
    return num1 / num2;
  }
}

// Step 3 - Create a new function called operate

const operate = (operator, num1, num2) => {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
};

//Step 4 - Display Logic

display.textContent = displayValue;

function updateDisplay(value) {
  displayValue = value;
  display.textContent = displayValue.toString();
}

function clear() {
  displayValue = "";
  num1 = "";
  num2 = "";
  operator = "";
  updateDisplay(displayValue);
}

function onEqualClick() {
  console.log(num1, operator, num2);
  if (num1 !== null && operator !== null && num2 !== null) {
    num2 = parseInt(secondTemp);
    num1 = operate(operator, num1, num2);
    updateDisplay(num1);
    num2 = null;
    operator = "";
    secondTemp = "";
  }
}

// Step 5 - Add Event Listeners

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (num1 != null && operator === "") {
      display.textContent += button.value;
      num1 = parseInt(display.textContent);
      console.log(num1);
    } else if (num1 != null && operator != "") {
      display.textContent += button.value;
      secondTemp += button.value;
      num2 = parseInt(secondTemp);
      console.log(num2);
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      operator !== "+" &&
      operator !== "-" &&
      operator !== "*" &&
      operator !== "/"
    ) {
      operator = button.value;
      display.textContent += operator;
    }
  });
});

clearButton.addEventListener("click", (e) => {
  clear();
});

equalsButton.addEventListener("click", (e) => {
  onEqualClick();
});
