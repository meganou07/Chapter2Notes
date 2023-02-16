let choice = readLine.question("Do you want to hear a joke? y/n: ");
if (choice == "y"){
    console.log("Here's a joke.")}


let num = Number(readLine.question("Enter a number: "));
if (num % 2 == 0){
    console.log("It's divisible by 2");
} else {
    console.log("Not divisible by 2");
}
if (num % 3 == 0){
    console.log("It's divisible by 3");
} else {
    console.log("Not divisible by 3");
}
if (num % 4 == 0){
    console.log("It's divisible by 4");
} else {
    console.log("Not divisible by 4");
}
if (num % 5 == 0){
    console.log("It's divisible by 5");
} else {
    console.log("Not divisible by 5");
}
if (num % 6 == 0){
    console.log("It's divisible by 6");
} else {
    console.log("Not divisible by 6");
}
let guess = Number(readLine.question("Enter number: "));
if (guess == 16){
    console.log("You won!");
} else if (guess < 16){
    console.log("Too small");
} else if (guess > 16){
    console.log("Too big")
}
let cost = Number(readLine.question("Enter cost: "));
if (cost <= 0){
    console.log("invalid");
} else {
    let tax = cost * .08;
    let newTotal = cost + tax;
    console.log(`Your bill is $${newTotal.toFixed(2)}`);
}
let mealCost = Number(readLine.question("Enter cost: "));
if (mealCost <= 0){
    console.log("invalid")
} else {
    let service = readLine.question("How was the service? (great/good/average) : ");
    let tip = 0;
    if (service == "great"){
        tip = mealCost * .20;
    } else if (service == "good"){
        tip = mealCost * .15;
    } else if (service == "average"){
        tip = mealCost * .10;
    }
    let totalBill = cost + tip;
    console.log(`The total bill should be $${totalBill.toFixed(2)}`);
}