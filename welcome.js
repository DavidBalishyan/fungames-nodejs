const ps = require('prompt-sync')();
const prompt = ps;

const username = prompt("Tell me your name: ")

console.log(`Welcome to  fun game project, ${username}`)
console.log("to open quizz game type: `npm run quizz` ");
console.log("to open random number game type: `npm run rng` ");
console.log("to open rock paper scissors game type: `npm run rpc` ");
console.log("Warning: you need to install nodejs before using this project");