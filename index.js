// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "descMotivation",
        message: "What was your motivation for the project?"
    },
    {
        type: "input",
        name: "descWhyBuild",
        message: "Why did you build the project?"
    },
    {
        type: "input",
        name: "descWhatProblemSolved",
        message: "What problem does the project solve?"
    },
    {
        type: "input",
        name: "descWhatDidYouLearn",
        message: "What did you learn from building the project?"
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => console.log(answers));
}

// Function call to initialize app
init();
