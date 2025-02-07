let a = 0, b = 0, result = 0;
let op;
let opr;
let int = 0, val;
let disp = '';
let s = '';
let temp = 0, i=0, d=0;
let x=0, y=0, dec='';

// To get value input by user as a number
function getNumbers(eleId) {
    let n = document.getElementById(eleId);
    n = n.value;
    n = parseFloat(n);
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
        case "non":
             result = a;
    }
    document.getElementById('inputNum').value = result ;
    return(result);
}
function setOperation(opr) {
    d=0;

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
        default :
            op = "non";
    }
    if(op == 'non'){
        disp = a;
        document.getElementById('inputNum').value = disp;
    }
    else {
    disp =  a + ' ' + opr;
    }
    document.getElementById('comp').value = disp;
}
function setAllClear() {
    document.getElementById('inputNum').value = '';
    document.getElementById('comp').value='';
    op = '';
    opr = '';
    i=0;
    d=0;
    x=0;

}
function backSpace() {
    s = document.getElementById('inputNum').value;
    document.getElementById('inputNum').value = s.slice(0, -1 );
}


function numPad(num) {
    if(num==".") {
        dec=document.getElementById('inputNum').value;
            if(dec.includes(".")==false || dec.endsWith('.')){
                if(d==0) {
                    document.getElementById('inputNum').value = document.getElementById('inputNum').value + num;
                    d=1;
                } else {
                    document.getElementById('inputNum').value = document.getElementById('inputNum').value.slice(0, -1 ) ;
                    d=0;
                    }
            } 
    } else {
        document.getElementById('inputNum').value = document.getElementById('inputNum').value + num; 
    }
}

function numDec() {
    a = parseFloat(getNumbers('inputNum'));
    console.log(a);
}

function numSign() {
    document.getElementById('inputNum').value = getNumbers('inputNum') * -1;
}

function processFun(opr) {
    d=0;
    x=0;
    //y=y+1
    //if(y==1){
        if(i==0) {
            a = getNumbers("inputNum");
            setOperation(opr);
            i++;
        }
        else {
            temp = getResult();
            a = temp;
            setOperation(opr);
        }
    //}
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

