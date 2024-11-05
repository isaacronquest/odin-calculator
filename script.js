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
    let digit = event.target.textContent;
    if ((numA === '0' && digit === '0') || (numA === '' && digit === '0')) {
        numA = digit;
        screen.textContent = numA;
    }
    else if ((numA === '0' && digit === '.') || (numA === '' && digit === '.')) {
        numA = '0' + digit;
        screen.textContent = numA;
    }
    else if (digit === '.' && numA.indexOf('.') != -1) {
        screen.textContent = numA;
    }
    else if (numA === '0' && digit != '') {
        numA = digit;
        screen.textContent = numA;
    }
    else {
        numA += digit;
        screen.textContent = numA;
    }
    
}

function digitClickB(event) {
    let digit = event.target.textContent;
    if ((numB === '0' && digit === '0') || (numB === '' && digit === '0')) {
        numB = digit;
        screen.textContent = `${numA} ${operator} ${numB}`;
    }
    else if ((numB === '0' && digit === '.') || (numB === '' && digit === '.')) {
        numB = '0' + digit;
        screen.textContent = `${numA} ${operator} ${numB}`;
    }
    else if (digit === '.' && numB.indexOf('.') != -1) {
        screen.textContent = `${numA} ${operator} ${numB}`;
    }
    else if (numB === '0' && digit != ''){
        numB = digit;
        screen.textContent = `${numA} ${operator} ${numB}`;
    }
    else {
        numB += digit;
        screen.textContent = `${numA} ${operator} ${numB}`;
    }
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

    // Default behaviou
    if (numA != '' && operator === '' && numB === '') {
        operator = event.target.textContent;
        screen.textContent += ` ${operator}`;
        setDigitsB();
    }

    // Entered first number and operator but want to change operator
    else if (numA != '' && operator != '' && numB === '') {
        let text = screen.textContent;
        let textNew = text.slice(0,-1);
        operator = event.target.textContent;
        screen.textContent = textNew + ` ${operator}`;
    }

    // 
    // else if (numA != '' && operator === '/' && numB === '0') {
    //         clearFunc();
    //         screen.textContent = 'Error-Op'
    //     }
    
    else if (numA != '' && operator != '' && numB != '') {
            let answer = operate(operator,numA,numB);
            numA = String(answer);
            numB = '';
            operator = event.target.textContent;
            screen.textContent = roundOf(answer) + ` ${operator}`;
            setDigitsB();
        } 
    };



const equalBtn = document.querySelector('#equalBtn');

equalBtn.addEventListener("click", () => {
    if (operator === '/' && numB === '0') {
        clearFunc();
        screen.textContent = 'Error-Equal'
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