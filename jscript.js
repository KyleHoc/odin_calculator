function add (num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract (num1, num2){
    const minus = num2 - num1;
    return minus;
}

function multiply (num1, num2){
    const product = num1 * num2;
    return product;
}

function divide (num1, num2){
    const quot = num2 / num1;
    return quot;
}

let arg1 = 0;
let arg2= 0;
let stringCopy = '0';
let operator = null;
let eqOperator = null;

document.getElementById("display").innerHTML = stringCopy;

function input(key){
    if(arg1 == 0){
        arg1 = key;
        stringCopy = String(key);
        document.getElementById("display").innerHTML = stringCopy;
    } else {
        stringCopy = stringCopy + String(key);
        arg1 = parseInt(stringCopy);
        document.getElementById("display").innerHTML = stringCopy;
    }
}

function call(sym){
    let result = 0;
    eqOperator = sym;

    if (operator == null){
        stringCopy = '';
        operator = sym;
        arg2 = arg1;
    } else {
        result = operate(operator, arg1, arg2);
        document.getElementById("display").innerHTML = String(result);
        operator = sym;
        arg1 = arg2;
        arg2 = result;
        stringCopy = '';
    }
}


function operate(sym, num1, num2){
    let result = 0;
    
    if(sym == '+'){
        result = add(num1, num2);
    }

    if(sym == '-'){
        result = subtract(num1, num2);
    }

    if(sym == '*'){
        result = multiply(num1, num2);
    }

    if(sym == '/'){
        result = divide(num1, num2);
    }

    return result;
}

function clear(){
    arg1 = 0;
    arg2 = 0;
    operator = null;
    stringCopy = '';
    document.getElementById("display").innerHTML = '0';
}

function equals(){
    let result = 0;

    result = operate(eqOperator, arg1, arg2);
    document.getElementById("display").innerHTML = String(result);
    operator = sym;
    arg1 = arg2;
    arg2 = result;
    stringCopy = '';
}