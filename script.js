function add(a,b) {
    result = a + b;
    numOne = "";
    numTwo = "";
    op = 0;
};

function subtract(a,b) {
    result = a - b;
    numOne = "";
    numTwo = "";
    op = 0;
};

function multiply(a,b) {
    result = a * b;
    numOne = "";
    numTwo = "";
    op = 0;
};

function divide(a,b) {
    result = a / b;
    numOne = "";
    numTwo = "";
    op = 0;
};

function operate(a,b,op) {
    if (op === "+") {
        add(a,b);
    } else if (op === "-") {
        subtract(a,b);
    } else if (op === "*") {
        multiply(a,b);
    } else if (op === "/") {
        divide(a,b);
    }
}

let numOne = "";
let numTwo = "";
let op = 0;
let result;
let aCount = 0;
let bCount = 0;

numButtons = document.getElementsByClassName('numBtn');
for (i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener ("click", function (event) {
        if (op == 0) {
            numOne += event.target.innerHTML;
        } else {
            numTwo += event.target.innerHTML;
        }
    })
}

opButtons = document.getElementsByClassName('opBtn');
for (i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener ("click", function (event) {
        op = event.target.value;
    })
}
