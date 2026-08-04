console.log("Hello world")
let student_name = "sindhu"
console.log("Student name is:" + student_name)
let student_age=20
let course_name="Python Full Stack"
console.log("Student age is:" + student_age,"course name is:" + course_name)
let fee = 10000
let discount = 10
let discounted_fee = fee - (fee * discount / 100)
console.log("Discounted fee is: " +discount_fee)
let age=18
if (age>=18){
    console.log("eligible for adminission")
}
else{
    console.log("Not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("Iteration number:" + i)
}
const pi = 3.14
console.log("value of pi is: " + pi)
let Student = {
    name: "Sriram",
    age: 21,
    course: "python full stack",
    fee: 10000
}
console.log("Student details: ", student)

function greenStudent(name){
    console.log("Hello "+ name + ",welcome to NRIIT Learning Management system")
}
greetStudent(student_name)
