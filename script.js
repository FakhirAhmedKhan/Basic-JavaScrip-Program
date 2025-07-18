// What is JavaScript?
// JavaScript is a functional programming language that runs within the browser. It is one of the main languages used by developers and includes many built-in functions and features.

// What is Variables in JavaScript?
// JavaScript has three ways to declare variables: var, let, and const.

// // A variable is used to store data. You can change the value of a variable declared with var or let.
// // However, variables declared with const cannot be reassigned their value stays constant.

// // Examples:
// let A;
// let a;            // JavaScript is case-sensitive, so 'A' and 'a' are different variables.
// // let @b;        // Invalid: special characters like '@' are not allowed in variable names.
// let appleId;      // Valid: camelCase is the common naming convention.
// let apple1;       // Valid: numbers can be used but not at the start.
// // let 9apple;    // Invalid: variable names cannot begin with a number.

// const apple = 1;
// // apple = 2;     // Error: const values cannot be reassigned.

// // What is a Data Type in JavaScript?
// // JavaScript has 8 main data types:
// // String, Number, BigInt, Object, Symbol, Null, Undefined, and Boolean

// // // Examples:
// // let b = "apple";     // String
// // let B = "11";        // String (even though it's a number in quotes)
// // let c = 1;           // Number
// // let C = 1n;          // BigInt (used for very large integers)
// // let d = {            // Object
// //     fruitName: "apple",
// //     qty: 1,
// // };
// // let D = Symbol("uniqueId"); // Symbol (used for unique identifiers)
// // let e = null;        // Null (intentionally empty)
// // Note: typeof e returns "object" — this is a known quirk in JavaScript
// // let E;               // Undefined (no value assigned yet)
// // let f = true;        // Boolean (true or false)
// // let F = true / false; // This gives Infinity (true is 1, false is 0; 1/0 = Infinity)

// // typeof keyword
// // The typeof operator is used to check the data type of a variable or value.
// // console.log(typ/eof e);  // "object" (this is a known JavaScript bug)
// // console.log(typeof E);  // "undefined"
// // console.log(typeof f);  // "boolean"
// // console.log(typeof F);  // "number"

// // What are Operators in JavaScript?
// // Operators are symbols that perform operations on variables and values.
// // Examples: +, -, =, ==, ===, >, *, **, %, --, ++

// // let g = 1 - 10;       // Subtraction
// // console.log(g);       // Output: -9

// // let a1 = 3;
// // let a2 = 3;
// // let G = a1 ** a2;     // Exponentiation (3 to the power of 3)
// // console.log(G);       // Output: 27

// // What are Statements in JavaScript?
// // Statements control the flow of code. Common ones include:
// // - if/else
// // - switch/case
// // - Ternary operator ( ? : )

// // if/else statement
// // if (a1 === a2) {
// //     console.log("Yes");  // Output if a1 equals a2
// // } else {
// //     console.log("No");
// // }

// // switch/case statement
// // let choice = "";

// // switch (choice) {
// //     case "pizza":
// //         console.log("You chose pizza!");
// //         break;
// //     case "burger":
// //         console.log("You chose burger!");
// //         break;
// //     default:
// //         console.log("Invalid choice");
// // }

// // Ternary operator
// // let age = 18;
// // let result = age >= 18 ? "Adult" : "Minor";
// // console.log(result); // Output: "Adult"

// // what is loops in javascript
// // in javascript we have 3 loops (for),(forEach),(while)

// // Example of a for loop
// // for (let i = 0; i < 5; i++) {
// //     console.log("For loop iteration:", i);
// // }
// // for loop when stop if  reach theri value

// // Example of a forEach loop
// // let fruits = ["apple", "banana", "mango"];

// // fruits.forEach(function (fruit) {
// //     console.log("forEach loop:", fruit);
// // });
// // foreach loop we use with arry

// // Example of a while loop
// // let i = 0;
// // while (i < 3) {
// //     console.log("While loop:", i);
// //     i++;
// // }
// // while loops is dinger loop is you put large value it can bloow your laptop fan eassy

// what is funcation in javascript
//we have two type of funcation first is a funcation and second is arror funcation we use to bulit a program for exalmapl we want a funcation it will work as a addition between number  create 2 number
// let B1 = 1;
// let B2 = 2;
// function add() {
//     console.log(B1 + B2)
// }
// add()

// const add = () => {
//   return console.log(B1 + B2);
// };
// add();

// what is javascript DOM and event
// we use getElementById(),addEventListener(),querySelectorAll(),.querySelector() and more byid and sellectin an id and queryselecrt sellect a class or queryselecetall can select all class
// ✅ Functions: Regular & Arrow
const B1 = 1;
const B2 = 2;

function add() {
    console.log(B1 + B2);
}
add();

const addArrow = () => {
    console.log(B1 + B2);
};
addArrow();

// ✅ DOM & Events
const myDiv = document.getElementById("myDiv");
const myID = document.getElementById("myID");

myDiv.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "red";
    e.target.textContent = "Thanks for clicking! 🤗";
    alert("Event triggered!");
});

// Move emoji with arrow keys
let moveY = 0;
let moveX = 0;
const moveStep = 100;

document.addEventListener("keydown", (event) => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                moveY -= moveStep;
                break;
            case "ArrowDown":
                moveY += moveStep;
                break;
            case "ArrowLeft":
                moveX -= moveStep;
                break;
            case "ArrowRight":
                moveX += moveStep;
                break;
        }
        myID.style.top = `${moveY}px`;
        myID.style.left = `${moveX}px`;
    }
});

// Add Numbers Function
function addNumbers() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").textContent = num1 + num2;
}

// Toggle Password Visibility
function togglePassword() {
    const passField = document.getElementById("passwordInput");
    passField.type = passField.type === "password" ? "text" : "password";
}
const passField = document.getElementById("passwordInput");
if (passField.type === "password") {
    passField.type = "text";
} else {
    passField.type = "password";
}
