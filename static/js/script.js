// Display welcome alert
alert("Welcome to NRIIT Learning Management System");

// Change heading text
let heading = document.getElementById("welcome");

if (heading) {
    heading.innerHTML = "Welcome Future Software Engineers";
    console.log("Heading element:", heading);
} else {
    console.log("Heading element with id 'welcome' not found.");
}

// Student details
let student_name = "Chitkala";
console.log("Student name is:", student_name);

let student_age = 21;
let course_name = "Python Full Stack";
console.log("Student age is:", student_age);
console.log("Course name is:", course_name);

// Fee calculation
let fee = 10000;
let discount = 10;
let discounted_fee = fee - (fee * discount / 100);
console.log("Discounted fee is:", discounted_fee);

// Eligibility check
let age = 8;

if (age >= 18) {
    console.log("Eligible for admission");
} else {
    console.log("Not eligible for admission");
}

// For loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number:", i);
}

// Constant
const pi = 3.14;
console.log("Value of pi is:", pi);

// Object
let student = {
    name: "Chitkala",
    age: 21,
    course: "Python Full Stack"
};

console.log("Student Object:", student);

// Function to square a number
function squareNumber(num) {
    return num * num;
}

let x = squareNumber(5);
console.log("Square of 5 is:", x);

// Function to check odd or even
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("Check if 7 is odd or even:", checkEvenOdd(7));
console.log("Check if 10 is odd or even:", checkEvenOdd(10));