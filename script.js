let numA = 0;
let numB = 0;
let operator = '';

function add (a,b) {
    console.log(a + b);
    // return a + b;
}

function subtract (a,b) {
    console.log(a - b);
    // return a - b;
}

function multiply (a,b) {
    console.log(a * b);
    // return a * b;
}

function divide(a,b) {
    console.log(a / b);
    // return a / b;
}

function operate(op,nA,nB) {
    switch (op) {
        case '+':
            add(nA,nB);
            break;
        case '-':
            subtract (nA,nB);
            break;
        case '*':
            multiply(nA,nB);
            break;
        case '/':
            divide(nA,nB);
            break;
    }
}

