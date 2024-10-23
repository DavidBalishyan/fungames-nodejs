const ps = require('prompt-sync')();
const prompt = ps;

let wins = 0
let loses = 0
let ties = 0

while(true){
const choise = prompt("Enter rock paper or scissors (q quit): ")


if (choise !== "rock" && choise !== "paper" && choise !== "scissors" && choise !== "q") {
    console.log("Enter a valid choise");
    continue;
}

const choises = ["rock", "paper", "scissors"]
const randomidx = Math.round(Math.random() * 2)
const choiseOfComputer = choises[randomidx]

console.log(`${choiseOfComputer}`);

if (choiseOfComputer === choise) {
    console.log("Tie!");
    ties++
}else if((choise === "paper" && choiseOfComputer === "rock") || 
        (choise === "rock" && choiseOfComputer === "scissors") || 
        (choise === "scissors" && choiseOfComputer === "paper"))
{
    console.log("win!");
    wins++
}else {
    console.log("lose!");
    loses++
}

if (choise === "q") {
    console.log(`Wins: ${wins}`);
    console.log(`loses: ${loses}`);
    console.log(`ties: ${ties}`);
    break
}

}