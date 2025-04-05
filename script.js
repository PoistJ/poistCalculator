function add(a,b) {
    result = a + b;
    const display = document.querySelector(".display");
    display.textContent = result; 
    return result;
};

function subtract(a,b) {
    result = a - b;
    const display = document.querySelector(".display");
    display.textContent = result;   
    return result;
};

function multiply(a,b) {
    result = a * b;
    const display = document.querySelector(".display");
    display.textContent = result;
    return result;   
};

function divide(a,b) {
    const display = document.querySelector(".display");
    if (b == 0) {
        display.textContent = "Can't divide by 0";
    } else {
        result = a / b;
        display.textContent = result;
        return result;
    }
};

function operate(a,b,op) {
    a = parseInt(a);
    b = parseInt(b);
    if (op === "+") {
        return add(a,b);
    } else if (op === "-") {
        return subtract(a,b);
    } else if (op === "*") {
        return multiply(a,b);
    } else if (op === "/") {
        return divide(a,b);
    };
};

function clearAll() {
    numOne = "";
    numTwo = "";
    op = 0;
    result = 0;
    const display = document.querySelector(".display");
    display.innerHTML = "";
    const calculation = document.querySelector(".calc");
    calculation.innerHTML = "";
    const decBtn = document.getElementById("decimalBtn")
    decBtn.disabled = false;
};

function convertSign() {
    if (op == 0) {
        numOneLen = numOne.length;
        numOne = numOne * (-1);
        const calculation = document.querySelector(".calc");
        calculation.innerText = calculation.innerText.slice(0, calculation.innerText.length - numOneLen);
        calculation.innerHTML += numOne;
    } else {
        numTwoLen = numTwo.length;
        numTwo = numTwo * (-1);
        const calculation = document.querySelector(".calc");
        calculation.innerText = calculation.innerText.slice(0, calculation.innerText.length - numTwoLen);
        calculation.innerHTML += numTwo;
    };
};

let numOne = "";
let numTwo = "";
let op = 0;
let result;
let tempString;
let numOneLen;

numButtons = document.getElementsByClassName('numBtn');
for (i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener ("click", function (event) {
        if (op == 0) {
            numOne += event.target.innerHTML;
            const calculation = document.querySelector(".calc");
            calculation.textContent += event.target.innerHTML;
        } else {
            numTwo += event.target.innerHTML;
            const calculation = document.querySelector(".calc");
            calculation.textContent += event.target.innerHTML;
        };
    });
};

opButtons = document.getElementsByClassName('opBtn');
for (i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener ("click", function (event) {
        if (op !== 0 & numOne !== "" & numTwo !== "") {
            numOne = operate(numOne, numTwo, op);
            numTwo = "";
        };
        op = event.target.value;
        const calculation = document.querySelector(".calc");
        calculation.textContent += " " + event.target.innerHTML + " ";  
        document.getElementById("decimalBtn").disabled = false;
    });
};

decimalButton = document.getElementById("decimalBtn");
decimalButton.addEventListener ("click", function (event) {
    decimalButton.disabled = "true"
    if (op == 0) {
        numOne += ".";
    } else {
        numTwo += ".";
    }
    const calculation = document.querySelector(".calc");
    calculation.textContent += event.target.innerHTML;
});