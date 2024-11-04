let numA = '';
let numB = '';
let operator = '';

function add (a,b) {
    // console.log(a + b);
    return a + b;
}

function subtract (a,b) {
    // console.log(a - b);
    return a - b;
}

function multiply (a,b) {
    // console.log(a * b);
    return a * b;
}

function divide(a,b) {
    // console.log(a / b);
    return a / b;
}

function operate(op,a,b) {
    nA = Number(a);
    nB = Number(b);
    switch (op) {
        case '+':
            return add(nA,nB);
        case '-':
            return subtract (nA,nB);
        case 'x':
            return multiply(nA,nB);
        case '/':
            return divide(nA,nB);
    }
}

const screen = document.querySelector('.displayDigits');

const digitBtn = document.querySelectorAll('.digits');

digitBtn.forEach(button => {
    button.addEventListener('click', digitClickA);
});

function digitClickA(event) {
    const buttonText = event.target.textContent;
    numA += buttonText
    screen.textContent = numA;
}

function digitClickB(event) {
    const buttonText = event.target.textContent;
    numB += buttonText
    screen.textContent += numB;
}



const opBtn = document.querySelectorAll('.operator');

opBtn.forEach(button => {
    button.addEventListener('click', opFunc);
});

function opFunc (event) {
    operator = event.target.textContent;
    screen.textContent += operator;

    digitBtn.forEach(button => {
        button.removeEventListener('click', digitClickA)
        button.addEventListener('click', digitClickB);
    });
};



const equalBtn = document.querySelector('#equalBtn');

equalBtn.addEventListener("click", () => {
    let answer = '';

    if (numA != '' && numB != '' && operator != '') {
        answer = operate(operator,numA,numB);
        screen.textContent = answer;
    }
});



const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener("click", () => {
    numA = '';
    numB = '';
    operator = '';
    screen.textContent = '0';

    digitBtn.forEach(button => {
        button.removeEventListener('click', digitClickB)
        button.addEventListener('click', digitClickA);
    });
});