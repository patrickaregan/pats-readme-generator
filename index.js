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
        name: "briefDescription",
        message: "Brief description of the project:"
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
    {
        type: "input",
        name: "instInstructions",
        message: "What are the steps required to install your project project?"
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Provide instructions and examples for use:"
    },
    {
        type: "input",
        name: "contribGuidelines",
        message: "Provide contribution guidelines:"
    },
    {
        type: "input",
        name: "testExamples",
        message: "Provide examples of how to run tests:"
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
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
