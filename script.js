//variables

let firstNumber = "";
let operator = "";
let secondNumber = "";

//selectors

const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll(".regular");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        const newText = document.createTextNode(buttonText);
        screen.appendChild(newText);
    });
})

const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", () => {
        screen.innerHTML = "";
        firstNumber = "";
        operator = "";
        secondNumber = "";
    })

const equalButton = document.querySelector(".equals");
    equalButton.addEventListener("click", () => {
        beginCalc();
        let result = operate(firstNumber, operator, secondNumber);
        const resultText = document.createTextNode(result);
        screen.innerHTML = "";
        screen.appendChild(resultText);
    })

//functions

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate (firstNumber, operator, secondNumber) {
    if (operator === "+") {
        add (firstNumber, secondNumber);
    } else if (operator === "-") {
        subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        divide (firstNumber, secondNumber)
    } else {
        alert("Insert a valid number")
    }
}

function beginCalc () { 
    const string = screen.textContent;
    const delimiters = /([+\-*/])/g;
    const parts = string.split(delimiters);
        if (parts.length >= 3) {
            firstNumber = parts[0];
            operator = parts[1];
            secondNumber = parts[2];
        } else {
            console.log("The original string does not have enough parts");
        }
}