let entryFlag = true;

let key1 = document.getElementById("one");
key1.addEventListener('click', function(){
    input(1);
});

let key2 = document.getElementById("two");
key2.addEventListener('click', function(){
    input(2);
});

let key3 = document.getElementById("three");
key3.addEventListener('click', function(){
    input(3);
});

let key4 = document.getElementById("four");
key4.addEventListener('click', function(){
    input(4);
});

let key5 = document.getElementById("five");
key5.addEventListener('click', function(){
    input(5);
});

let key6 = document.getElementById("six");
key6.addEventListener('click', function(){
    input(6);
});

let key7 = document.getElementById("seven");
key7.addEventListener('click', function(){
    input(7);
});

let key8 = document.getElementById("eight");
key8.addEventListener('click', function(){
    input(8);
});

let key9 = document.getElementById("nine");
key9.addEventListener('click', function(){
    input(9);
});

let key0 = document.getElementById("zero");
key0.addEventListener('click', function(){
    input(0);
});

let keyplus = document.getElementById("plus");
keyplus.addEventListener('click', function(){
    call('+');
});

let keyminus = document.getElementById("minus");
keyminus.addEventListener('click', function(){
    call('-');
});

let keyX = document.getElementById("times");
keyX.addEventListener('click', function(){
    call('*');
});

let keyDiv = document.getElementById("divide");
keyDiv.addEventListener('click', function(){
    call('/');
});

let keyEqual = document.getElementById("equals");
keyEqual.addEventListener('click', function(){
    equals();
});

let keyClear = document.getElementById("clear");
keyClear.addEventListener('click', function(){
    clear();
});