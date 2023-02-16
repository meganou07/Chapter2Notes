const readLine = require('readline-sync');

let num1 = Number(readLine.question("Enter number: "));
let num2 = Number(readLine.question("Enter 2nd number: "));
console.log(`${num1} + ${num2} = ${num1 + num2}`);

let num3 = Number(readLine.question("Enter number: "));
let num4 = Number(readLine.question("Enter 2nd number: "));
console.log(`${num3} - ${num4} = ${num3 - num4}`);

let num5 = Number(readLine.question("Enter number: "));
let num6 = Number(readLine.question("Enter 2nd number: "));
console.log(`${num5} * ${num6} = ${num5 * num6}`);

let num7 = Number(readLine.question("Enter number: "));
let num8 = Number(readLine.question("Enter 2nd number: "));
console.log(`${num7} / ${num8} = ${num7 / num8}`);

let num9 = Number(readLine.question("Enter number: "));
let num10 = Number(readLine.question("Enter 2nd number: "));
console.log(`${num9} % ${num10} = ${num9 % num10}`);

let nam1 = (readLine.question("Enter first name: "));
let nam2 = (readLine.question("Enter last name: "));
console.log(`Welcome ${nam2} ,${nam1} `);

let titl = (readLine.question("Enter title: "));
let las = (readLine.question("Enter last name: "));
let suf = (readLine.question("Enter suffix: "));
console.log(`Welcome ${titl}.${las},${suf}. `);

let streetnum = (readLine.question("Enter street number: "));
let streetnam = (readLine.question("Enter street name: "));
let streettype = (readLine.question("Enter street type: "));
let city = (readLine.question("Enter city: "));
let state = (readLine.question("Enter state: "));
let zipcode = (readLine.question("Enter zip code: "));
console.log(`${streetnum},${streetnam},${streettype},${city},${state},${zipcode} `);