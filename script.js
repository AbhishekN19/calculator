let a = 0, b = 0, result = 0;
let op;
let opr;
let int = 0, val;
let disp = '';

// To get value input by user as a number
function getNumbers(eleId) {
    let n = document.getElementById(eleId);
    n = n.value;
    n = parseInt(n);
    console.log(n);
    return n;
}

// To get the result 
function getResult() {
    b = getNumbers("inputNum");
    document.getElementById('comp').value = disp + ' ' + b;
    document.getElementById('inputNum').value = '';

    switch(op) {
        case "add":
            result = a + b;
            break;
        case "sub":
            result = a - b;
            break;
        case "mul":
            result = a * b;
            break;
        case "div":
            result = a / b;
            break;
    }
    
    document.getElementById('result').value = result ;
}
function setOperation(opr) {
    a = getNumbers("inputNum");
    document.getElementById('inputNum').value = '';
    switch(opr) {
        case "+":
            op = "add";
            break;
        case "-":
            op = "sub";
            break;
        case "x":
            op = "mul";
            break;
        case "/":
            op = "div"
            break;
    }
    disp =  a + ' ' + opr;
    document.getElementById('comp').value = disp;
}
function setAllClear() {
    document.getElementById('inputNum').value = '';
    document.getElementById('result').value = '';
    op = '';
    opr = '';
}

// issue when number is not initialized first
// function setNumber(val) {
//     int = getNumbers("inputNum");
//     if (int == NaN) {int = 0;}
//     switch(val) {
//         case "one":
//             int = (int * 10) + 1;
//             break;
//         case "two":
//             int = (int * 10) + 2;
//             break;
//         case "three":
//             int = (int * 10) + 3;
//             break;
//         case "four":
//             int = (int * 10) + 4;
//             break;
//         case "five":
//             int = (int * 10) + 5;
//             break;
//         case "six":
//             int = (int * 10) + 6;
//             break;
//         case "seven":
//             int = (int * 10) + 7;
//             break;
//         case "eight":
//             int = (int * 10) + 8;
//             break;
//         case "nine":
//             int = (int * 10) + 9;
//             break;
//         case "zero":
//             int = (int * 10) + 0;
//             break;
//         }
//         document.getElementById('inputNum').value = int;
// }

function numPad(num) {
    document.getElementById('inputNum').value = document.getElementById('inputNum').value + num;

}
    


