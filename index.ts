#! /usr/bin/env node

import inquirer from "inquirer";

// asking Questions from user through Inquirer

const answer = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstnumber"},
    {message: "Enter Second Number", type: "number", name: "secondnumber"},
    {message: "Select one operator to perform operation",
     type: "list", 
     name: "operator",
     choices: ["Addition", "Subtraction", "Multiplication", "Division"],
} 
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division"){
    console.log(answer.firstnumber / answer.secondnumber);
}
else console.log("Please Select valid operator")
