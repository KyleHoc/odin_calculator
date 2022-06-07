function add (num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract (num1, num2){
    const minus = num1 - num2;
    return minus;
}

function multiply (num1, num2){
    const product = num1 * num2;
    return product;
}

function divide (num1, num2){
    const quot = num1 / num2;
    return quot;
}

function input(key){
    
    //document.getElementById("display").innerHTML = num;
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
}