alert("Welcome to NRIIT Learning Management System");

let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers";
console.log("Heading element:", heading);

let student_name = "Chitkala";
console.log("Student name is: " + student_name);

let student_age = 21;
let course_name = "Python Full Stack";
console.log("Student age is: " + student_age, "Course name is: " + course_name);

let fee = 10000;
let discount = 10;
let discounted_fee = fee - (fee * discount / 100);
console.log("Discounted fee is: " + discounted_fee);

let age = 8;

if (age >= 18) {
    console.log("Eligible for admission");
} else {
    console.log("Not eligible for admission");
}

for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

const pi = 3.14;
console.log("Value of pi is: " + pi);

let student = {
    name: "Chitkala",
    age: 21,
    course: "Python Full Stack"
};

console.log(student);