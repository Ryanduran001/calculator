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
    // let input = document.getElementById("input");
    console.log(input)
    let x = parseInt(document.getElementById('numone').value);
    console.log(x);
    let l = parseInt(document.getElementById('numtwo').value);
    console.log(l);
    var k = x + l;
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function subClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value);
    console.log(x);
    let l = parseInt(document.getElementById('numtwo').value);
    console.log(l);
    var k = x - l;
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function multClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value);
    console.log(x);
    let l = parseInt(document.getElementById('numtwo').value);
    console.log(l);
    var k = x * l;
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function divClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value);
    console.log(x);
    let l = parseInt(document.getElementById('numtwo').value);
    console.log(l);
    var k = x / l;
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function expClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value);
    console.log(x);
    let l = parseInt(document.getElementById('numtwo').value);
    console.log(l);
    var k = x ** l;
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function modClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value);
    console.log(x);
    let l = parseInt(document.getElementById('numtwo').value);
    console.log(l);
    var k = x % l;
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function sinClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value || document.getElementById('numtwo').value);
    console.log(x);
    var k = Math.sin(x);
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function cosClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value || document.getElementById('numtwo').value);
    console.log(x);
    var k = Math.cos(x);
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function tanClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value || document.getElementById('numtwo').value);
    console.log(x);
    var k = Math.tan(x);
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function sqrtClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value || document.getElementById('numtwo').value);
    console.log(x);
    var k = Math.sqrt(x);
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function asinClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value || document.getElementById('numtwo').value);
    console.log(x);
    var k = Math.asin(x);
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function acosClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value || document.getElementById('numtwo').value);
    console.log(x);
    var k = Math.acos(x);
    document.write(`<h2>The Answer Is ${k}<h2>`);
}

function atanClick() {
    console.log(input)
    let x = parseInt(document.getElementById('numone').value || document.getElementById('numtwo').value);
    console.log(x);
    var k = Math.atan(x);
    document.write(`<h2>The Answer Is ${k}<h2>`);
}