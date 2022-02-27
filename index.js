// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fileOperations = require('./utils/fileOperations');

// Create an array of questions for user input
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


// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(readmeText => {
            console.log(readmeText);
            return fileOperations.writeFile(readmeText);
        })
        .then(createFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
