// Calculator Program

const displayOutEl = document.getElementById("display");

function appendtoDisplay(input) {
  displayOutEl.value += input;
}

function clearDisplay() {
  displayOutEl.value = "";
}

function calculate() {
  displayOutEl.value = eval(displayOutEl.value);
}
