// Create a function that takes two numbers and prints their product.


// Write a function that subtracts one number from another and returns the result.

// Write a function divide(a, b) that returns the result of dividing a by b.Set a default value of 1 for b.


// Create a function greet(name = "User") that prints a greeting message like "Hello, User!".

// Write a function square(num = 2) that returns the square of a number.


// Create a function fullName(firstName, lastName = "Doe") that prints the full name of a person.

// Write a function findArea(length = 5, width = 10) that returns the area of a rectangle.


// Create a function showAge(name = "Unknown", age = 0) that prints a sentence like "Unknown is 0 years old.".

// Write a function isEven(num = 0) that returns true if the number is even, and false otherwise.
// Create a function repeatMessage(message = "Hi", times = 3) that prints the message multiple times.

// Write a function formatEmail(username = "user", domain = "example.com") that returns an email address in the format user @example.com.

// Write a function isPositive(num = 0) that returns true if the number is positive, false otherwise.

// Create a function minValue(a = 10, b = 20) that returns the smaller of the two numbers.


// Write a function maxValue(a = 10, b = 20) that returns the larger of the two numbers.


function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 6);
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 4));
function divide(a, b = 1) {
    return a / b;
}
console.log(divide(10));
function greet(name = "User") {
    console.log("Hello, " + name + "!");
}   
greet();
function square(num = 2) {
    return num * num;
}
console.log(square(4));
function fullName(firstName, lastName = "Doe") {
    console.log(firstName + " " + lastName);
}
fullName("John");
function findArea(length = 5, width = 10) {
    return length * width;
}
console.log(findArea());function showAge(name = "Unknown", age = 0) {
    console.log(name + " is " + age + " years old.");
}
showAge();
function isEven(num = 0) {
    return num % 2 === 0;
}
console.log(isEven(4));
function repeatMessage(message = "Hi", times = 3) {
    for (let i = 0; i < times; i++) {
        console.log(message);
    } 
}
repeatMessage();
function formatEmail(username = "user", domain = "example.com") {
    return username + "@" + domain;
}
console.log(formatEmail());function isPositive(num = 0) {
    return num > 0;
}
console.log(isPositive(5));
function minValue(a = 10, b = 20) {
    return a < b ? a : b;
}
console.log(minValue());
function maxValue(a = 10, b = 20) {
    return a > b ? a : b;
}
console.log(maxValue());
  