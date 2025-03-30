function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};

function operate(a,b,op) {
    if (op == "+") {
        return add(a,b);
    } else if (op == "-") {
        return subtract(a,b);
    } else if (op == "*") {
        return multiply(a,b);
    } else if (op == "/") {
        return divide(a,b);
    }
}

function storeNum () {
    if (a = '') {
        a = document.getElementsByClassName('btn').value;
    } else if (b = '' ) {
        b = document.getElementsByClassName('btn').value;
    }
}

function storeOp () {
    op = document.getElementsByClassName('btn').value;
}

let a = "";
let b = "";
let op = 0;
let result;
let aCount = 0;
let bCount = 0;

numButtons = document.getElementsByClassName('numBtn');
for (i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener ("click", function (event) {
        if (op == 0) {
            a += event.target.innerHTML;
            console.log(a);
            aCount++;
        } else {
            b += event.target.innerHTML;
            console.log(b);
            bCount++;
        }
    })
}

opButtons = document.getElementsByClassName('opBtn')
for (i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener ("click", function (event) {
        op = event.target.value;
    })
}

equalbutton = document.getElementsByClassName('equalBtn');