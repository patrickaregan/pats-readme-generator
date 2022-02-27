// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// ****************************************
// Functions for Contributing Section
// ****************************************

// Function to get the Contributing section if the data exists
const getContributingSection = (data) => {
  if (!data) {
    return "";
  }

  return `
## Contributing

  - ${data}  
  `;
}

// Function to get the Contributing Table of Contents section if Contributing data exists
const getContributingTOCSection = (data) => {
  if (!data) {
    return "";
  }

  return "- [Contributing](#contributing)";
}

// ****************************************
// Functions for Tests Section
// ****************************************

// Function to get the Tests section if the data exists
const getTestsSection = (data) => {
  if (!data) {
    return "";
  }

  return `
## Tests

  - ${data}  
  `;
}

// Function to get the Tests Table of Contents section if Tests data exists
const getTestsTOCSection = (data) => {
  if (!data) {
    return "";
  }

  return "- [Tests](#tests)";
}



// ****************************************
// Create a function to generate markdown for README
// ****************************************
const generateMarkdown = (data) => {
  return `
[![license](https://img.shields.io/badge/license-${data.licenseChoice}-brightgreen)]()

# ${data.projectTitle}

## Description

  - ${data.briefDescription}
  - ${data.descMotivation}
  - ${data.descWhyBuild}
  - ${data.descWhatProblemSolved}
  - ${data.descWhatDidYouLearn}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  ${getContributingTOCSection(data.contribGuidelines)}
  ${getTestsTOCSection(data.testExamples)}
  - [Questions](#questions)

## Installation

  - ${data.instInstructions}

## Usage

  - ${data.usageInfo}

## License

  - ${data.licenseChoice}

${getContributingSection(data.contribGuidelines)}

${getTestsSection(data.testExamples)}

## Questions

- [GitHub Profile](https://github.com/${data.gitHubUsername})
- If you have additional questions please email me at ${data.emailAddress}

`;


}

module.exports = generateMarkdown;
