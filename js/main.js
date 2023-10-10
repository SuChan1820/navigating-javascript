// Lessons 4: Answer to exercises sent through in Slack

// The Calculator - Part 1

// 1

function squareNumber(number) {
    let resultSquareNum = number * number;
    console.log(resultSquareNum);
    console.log(`The result of squaring ${number} is ${resultSquareNum}.`);
    return resultSquareNum;
}

squareNumber(3);

// 2

function halfNumber(number) {
    let resultHalfNum = number / 2;
    console.log(resultHalfNum);
    console.log(`Half of ${number} is ${resultHalfNum}.`);
    return resultHalfNum;
}

halfNumber(5);

// 3

function percentOf(number1, number2) {
    let resultPercentage = (number1 / number2) * 100;
    console.log(resultPercentage);
    console.log(`${number1} is ${resultPercentage}% of ${number2}.`);
    return resultPercentage;
}

percentOf(1, 4);

// 4

function areaOfCircle(number) {
    let resultCircleArea = 3.141592653589793 * (number * number);
    console.log(resultCircleArea);
    console.log(`The area of a circle with radius ${number} is ${resultCircleArea}.`);
    let resultCircleAreaTwoDec = resultCircleArea .toFixed(2);
    console.log(`Or for short ${resultCircleAreaTwoDec}.`);
    return resultCircleAreaTwoDec;
}

areaOfCircle(2);

// The Calculator - Part 2

function combineFunctions(number) {
    let result1 = halfNumber(number);
    let circleRadius = squareNumber(result1);
    let circleArea = areaOfCircle(circleRadius);
    let result4 = percentOf(circleArea, squareNumber(circleRadius * 2));
}

combineFunctions(10);

// If/Else Statements

// 1 What number's bigger?

function greaterNum(a, b) {
    if (a > b) {
        console.log(`${a} is bigger than ${b}.`);
    }
    else {
        console.log(`${b} is bigger than ${a}.`)
    }
}

greaterNum(1, 3);
greaterNum(10, 5);

// 2 The World Translator

function helloWorld(chooseLanguage) {
    if (chooseLanguage === 'eng') {
        console.log(`Hello World!`);
    }
    else if (chooseLanguage === 'jap') {
        console.log(`Kon'nichiwa!`);
    }
    else if (chooseLanguage === 'fr') {
        console.log(`Bonjour!`);
    }
    else if (chooseLanguage === 'ger') {
        console.log(`Hallo!`)
    }
    else {
        console.log(`Hello World!`);
    }
}

helloWorld('jap');
helloWorld('fr');
helloWorld();

// 3 The Grade Assigner

function assignGrade(score) {
    if (score < 50) {
        console.log("Fail.");
    }
    else if (score >= 50 && score < 70) {
        console.log("Pass.");
    }
    else if (score >= 70 && score < 80) {
        console.log("Distinction.")
    }
    else if (score >= 80 && score <= 100) {
        console.log("High Disctinction.")
    }
    else {
        console.log("You're a genius!")
    }
}

assignGrade(76);
assignGrade(105);

// 4 The Pluraliser - Su's attempt

function pluraliseSuAttempt(noun, number) {
    let collectiveNoun = 'sheep' || 'goose';
    if (number <= 1) {
        console.log(`${number} ${noun}.`);
    }
    else if (number >= 2 && noun != collectiveNoun) {
        console.log(`${number} ${noun}s.`);
    }
    else if (number >= 2 && noun === 'sheep') {
        console.log(`${number} ${noun}.`);
    }
    else if (number >= 2 && noun === 'goose') {
        console.log(`${number} geese.`);
    }
    else {
        console.log(`All the animals have escaped from the zoo!`);
    }   
}

pluraliseSuAttempt('cat', 2);
pluraliseSuAttempt('eagle', 1);
pluraliseSuAttempt('sheep', 1);
pluraliseSuAttempt('sheep', 25);
pluraliseSuAttempt('goose', 1);
pluraliseSuAttempt('goose', 103);
pluraliseSuAttempt();

// 4 The Pluraliser - When I couldn't get "goose" to log as "geese", I asked our friend ChatGPT and it gave me this code:

function pluraliseChatGPT(noun, number) {
    let collectiveNoun = 'sheep';
    if (noun === 'goose') {
        if (number === 1) {
            console.log(`${number} goose.`);
        } else {
            console.log(`${number} geese.`);
        }
    } else if (number <= 1) {
        console.log(`${number} ${noun}.`);
    } else if (number >= 2 && noun !== collectiveNoun) {
        console.log(`${number} ${noun}s.`);
    } else if (number >= 2 && noun === collectiveNoun) {
        console.log(`${number} ${noun}.`);
    } else {
        console.log(`All the animals have escaped from the zoo!`);
    }
}

pluraliseChatGPT('cat', 6);
pluraliseChatGPT('eagle', 1);
pluraliseChatGPT('sheep', 1);
pluraliseChatGPT('sheep', 72);
pluraliseChatGPT('goose', 1);
pluraliseChatGPT('goose', 56);
pluraliseChatGPT();

// CLG - Week 5 - Experimenting with APIs

// 1

function messageKnock() {
    console.log(`Knock Knock`);
}

function messageWhosThere() {
    console.log(`Who's there?`);
}

function messageFirstAnswer() {
    console.log(`Lettuce.`);
}

function messageQueryAnswer() {
    console.log(`Lettuce who?`);
}

function messagePunchLine() {
    console.log(`Lettuce in, it's too cold out here!`);
}

// console.log(`Wanna hear a joke?`);

// setTimeout(messageKnock, 1000);
// setTimeout(messageWhosThere, 2000);
// setTimeout(messageFirstAnswer, 3000);
// setTimeout(messageQueryAnswer, 4000);
// setTimeout(messagePunchLine, 5000);

// 2

// Setting up the function to be called for the repeating message
function repeatingMessage() {
    let num = 1;
    console.log(`This message is on repeat.` + num++);
}

// Setting up the new interval to repeat every 2 seconds
const settingUpNewInterval = setInterval(repeatingMessage, 2000);

// setInterval(repeatingMessage, 2000);

// Stopping the repeating message
clearInterval(settingUpNewInterval);


// CLG - Week 6 - Traversing the DOM

let button = document.querySelector(".btn");

function poppyBtn() {
    button.classList.toggle("btn-pop");
}

button.addEventListener('mouseover', poppyBtn);

// document.getElementById('title').style.textDecoration = "underline";

// let titles = document.querySelector(".title");

// titles.style.backgroundColor = "#F7BFB4";


// CLG - Week 7 - Javascript Objects

const plantProfile = {
    type: "rose",
    color: "red",
    height: 100 + "cm",
    whatPlantAmI: function() {
        console.log(`I'm a beautiful ${this.color} ${this.type} and I'm ${this.height} tall.`);
    }
};

plantProfile.whatPlantAmI();

// let colorCombo = {
//     firstColor: "pink",
//     secondColor: "green",
// }

// console.log(colorCombo.secondColor);

// let colorCombo = {
//     firstColor: "red",
//     secondColor: "",
// }

// console.log(colorCombo.secondColor);

let colorCombo = {
    firstColor: "blue",
}

console.log(colorCombo.secondColor);

// Parsing JSON and JavaScript

// let family = 
// [
//   {
//     "name": "Su",
//     "favColor": "green",
//     "buddingWebDev": true,
//     "hobbies": ["Exercising", "Eating", "Coding"],
//     "kids": [{
//       "name": "Sullivan",
//       "age": 5,
//       "isBoy": true
//     },
//     {
//       "name": "Spencer",
//       "age": 3,
//       "isBoy": true
//     }]
//   }
// ]

// console.log(JSON.parse(family));

// const listKiddos = 
// JSON.parse('{"olderKid": "Sullivan", "youngerKid": "Spencer"}');

// console.log(listKiddos);

const listKiddos = 
JSON.stringify('{"olderKid": "Sullivan", "youngerKid": "Spencer"}');

console.log(listKiddos);