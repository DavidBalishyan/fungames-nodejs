const ps = require('prompt-sync')();
const prompt = ps;

let guess = 0;
const target = 10 + Math.round(Math.random() * 90)
console.log(target)


while (true) {
    guess++
    let anw = +prompt("guess the random number beetwen 0 to 100: ")
    if (anw < target) {
        console.log("your num is too low");
    }else if(anw > target) {
        console.log("your num is too hight");
    }else{
        console.log("you are true");
        break;
    }
}

console.log(`it took you ${guess} guesses to Guess the number`);