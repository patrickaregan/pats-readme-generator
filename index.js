// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fileOperations = require('./utils/fileOperations');

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "briefDescription",
        message: "Brief description of the project:",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "descMotivation",
        message: "What was your motivation for the project?",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "descWhyBuild",
        message: "Why did you build the project?",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "descWhatProblemSolved",
        message: "What problem does the project solve?",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "descWhatDidYouLearn",
        message: "What did you learn from building the project?",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "instInstructions",
        message: "What steps are required to install your project?",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Provide instructions and examples for use:",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribGuidelines",
        message: "Provide contribution guidelines:",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "testExamples",
        message: "Provide examples of how to run tests:",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "licenseChoice",
        message: "Select a license for your project:",
        choices: ["GPL", "MIT", "None"],
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "gitHubUsername",
        message: "What is your GitHub username?",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
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
