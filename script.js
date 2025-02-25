// script.js

let screen = document.getElementById('calculator-screen');
let screenValue = '';

function appendNumber(number) {
    screenValue += number;
    screen.value = screenValue;
}

function appendOperator(operator) {
    screenValue += ' ' + operator + ' ';
    screen.value = screenValue;
}

function clearScreen() {
    screenValue = '';
    screen.value = screenValue;
}

function calculateResult() {
    try {
        screen.value = eval(screenValue);
        screenValue = screen.value;
    } catch (e) {
        screen.value = 'Error';
        screenValue = '';
    }
}
