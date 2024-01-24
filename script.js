// let num1 = document.getElementById('numone').value;
// let num2 = document.getElementById('numtwo').value;


// document.getElementById('add').addEventListener("click", addClick)
// document.getElementById('sub').addEventListener("click", sub(num1, num2))
// document.getElementById('mult').addEventListener("click", mult(num1, num2))
// document.getElementById('div').addEventListener("click", div(num1, num2))
// document.getElementById('exp').addEventListener("click", exp(num1, num2))
// document.getElementById('mod').addEventListener("click", mod(num1, num2))
// document.getElementById('sin').addEventListener("click", sin(num1))
// document.getElementById('cos').addEventListener("click", cos(num1))
// document.getElementById('tan').addEventListener("click", tan(num1))
// document.getElementById('sqrt').addEventListener("click", sqroot(num1))
// document.getElementById('asin').addEventListener("click", asin(num1))
// document.getElementById('acos').addEventListener("click", acos(num1))
// document.getElementById('atan').addEventListener("click", atan(num1))



function addClick() {
    // document.write(`<h2>Answer</h2> ${add(num1, num2)}`)
    var x = document.getElementById("oneinput").value;
    var l = document.getElementById("twoinput").value;
    let k = x + l;
    document.write(`<h2>The Answer Is ${k}<h2>`);
}



function add(num1, num2) {
    return(num1 + num2);
}

function sub(num1, num2) {
    return(num1 - num2);
}

function mult(num1, num2) {
    return(num1 * num2);
}

function div(num1, num2) {
    return(num1 / num2);
}

function exp(num1, num2) {
    return(num1 ^ num2);
}

function mod(num1, num2) {
    return(num1 % num2);
}

function sin(num1) {
    return(Math.sin(num1));
}

function cos(num1) {
    return(Math.cos(num1));
}

function tan(num1) {
    return(Math.tan(num1));
}

function sqroot(num1) {
    return(Math.sqrt(num1));
}

function asin(num1) {
    return(Math.asin(num1));
}

function acos(num1) {
    return(Math.acos(num1));
}

function atan(num1) {
    return(Math.atan(num1));
}