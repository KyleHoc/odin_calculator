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

let currentNum = 0;
let prevNum = 0;
let temp = 0;
let stringCopy = 0;
let symbol = ""
let symbolNext = "";
document.getElementById("display").innerHTML = stringCopy;

function input(key){
    if(typeof key == 'string' && key == '='){
        currentNum = operate(symbol, currentNum, prevNum);
        stringCopy = String(currentNum);
        document.getElementById("display").innerHTML = stringCopy;
    } else if (typeof key == 'string'){
        symbol = key;
        //stringCopy = '0';
        prevNum = currentNum;
        currentNum = 0;
        document.getElementById("display").innerHTML = stringCopy;
    } else {
        if(currentNum == 0){
            currentNum = key;
            stringCopy = String(key);
            document.getElementById("display").innerHTML = stringCopy;
        } else {
            stringCopy = stringCopy + String(key);
            currentNum = parseInt(stringCopy);
            document.getElementById("display").innerHTML = stringCopy;
        }
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

    if(sym == '='){
        sym = prevSym;
        operate(sym, num1, num2);
    }
    //stringCopy = '0';
    prevNum = currentNum;
    currentNum = 0;
    return result;
}