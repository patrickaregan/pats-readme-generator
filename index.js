// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is your first name?"
            }
        ])
        .then(answers => console.log(answers));
}

// Function call to initialize app
init();
