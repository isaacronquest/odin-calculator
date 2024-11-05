let numA = '';
let numB = '';
let operator = '';

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide(a,b) {
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
    numA += event.target.textContent;
    screen.textContent = numA;
}

function digitClickB(event) {
    numB += event.target.textContent;
    screen.textContent = numA + operator + numB;
}

function setDigitsA() {
    digitBtn.forEach(button => {
        button.removeEventListener('click', digitClickB)
        button.addEventListener('click', digitClickA);
    });
};

function setDigitsB() {
    digitBtn.forEach(button => {
        button.removeEventListener('click', digitClickA)
        button.addEventListener('click', digitClickB);
    });
};



const opBtn = document.querySelectorAll('.operator');

opBtn.forEach(button => {
    button.addEventListener('click', opFunc);
});

function opFunc (event) {

    if (numA != '' && operator === '' && numB === '') {
        operator = event.target.textContent;
        screen.textContent += operator;
        setDigitsB();
    }

    else if (numA != '' && operator != '' && numB === '') {
        let text = screen.textContent;
        let textNew = text.slice(0,-1);
        operator = event.target.textContent;
        screen.textContent = textNew + operator;
    }

    else if (numA != '' && operator != '' && numB != '') {
        if ((numA === '0' && operator === '/') || (operator === '/' && numB === '0')) {
            clearFunc();
            screen.textContent = 'Error'
        }
        else {
            let answer = operate(operator,numA,numB);
            numA = answer;
            numB = '';
            operator = event.target.textContent;
            screen.textContent = roundOf(answer) + operator;
            setDigitsB();
        } 
    }; 
    
};



const equalBtn = document.querySelector('#equalBtn');

equalBtn.addEventListener("click", () => {
    if ((numA === '0' && operator === '/') || (operator === '/' && numB === '0')) {
        clearFunc();
        screen.textContent = 'Error'
    }
    
    else if (numA != '' && numB != '' && operator != '') {
        screen.textContent = roundOf(operate(operator,numA,numB));
        numA = '';
        numB = '';
        operator = '';

        setDigitsA();
    }
});



const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener("click", () => {
    clearFunc();
});

function clearFunc () {
    numA = '';
    numB = '';
    operator = '';
    screen.textContent = '0';
    setDigitsA();
}



function roundOf(num) {
    return num % 1 === 0 ? num : Math.round(num * 100) / 100;
}