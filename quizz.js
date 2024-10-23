const ps = require('prompt-sync')();
const prompt = ps;

const username = prompt("Tell me your name: ")

console.log(`Welcome to quizz(node) project ${username}`);

let points = 0;
console.log(`starting points ${points}, 1 question = 1 point(s)`)

const obj_anw = {
    anw1: "CPU",
    anw2: "cooling",
    anw3: "terminal"
}


//q1
let q1 = prompt("What is the brain of the computer: ")

if (q1.toUpperCase() === obj_anw.anw1) {
    console.log("loading...");
    points++
}else{
    console.log("loading...")
    points -= 1
}


//q2
let q2 = prompt("what does coolers do: ")


if (q2.toLowerCase() === obj_anw.anw2) {
    console.log("loading...");
    points++
}else{
    console.log("loading...")
    points -= 1
}

//q3
let q3 = prompt("from where are you acsessing this app: ")

if (q3.toLowerCase() === obj_anw.anw3) {
    console.log("loading...");
    points++
}else{
    console.log("loading...")
    points-= 1
}

const prcentage = Math.round((points / 3) * 100)
console.log(`points: ${points}`);
console.log(`You got ${prcentage}% right`);