//Lessons 2 & 3: Assignment

const myName = "Su";
const myLocation = "Melbourne";
let weather = "raining";
let myFakeAge = 99;

console.log(myName, myLocation, weather);

console.log("My name is " + myName, ". I live in " + myLocation, "and I am " + myFakeAge, "years old.");

console.log(`My name is ${myName}, I live in ${myLocation} and I am ${myFakeAge} years old.`)

const myRealAge = (myFakeAge < 100) ? "A lady never reveals her age.": "You look amazing for your age!";

console.log(myRealAge);
console.log(myFakeAge++);
console.log(myFakeAge++);
console.log(myFakeAge++);

function examResult(A) {
    let score;
    if (A >= 50) {
        score = 'Woohoo! You Passed!';        
    } else {
        score = "Bah Bow.";
    }
    return score;
}

console.log(examResult(49));
console.log(examResult(50));
console.log(examResult(85));

console.warn("Pause. Drink some water");

function amountOfLemons(L) {
    let plural;
    if (L <= 1) {
        plural = 'lemon';
    } else {
        plural = 'lemons';
    }
    console.log(plural);
}

console.log(amountOfLemons(0));
console.log(amountOfLemons(1));
console.log(amountOfLemons(2));

for (let number = 1; number < 5; number++) {
    console.log(`I have ${number} lemons.`);
}
