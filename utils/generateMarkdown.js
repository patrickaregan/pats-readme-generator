// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

[![License](https://img.shields.io/badge/license-${data.licenseChoice}-brightgreen)]

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
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

  - ${data.instInstructions}

## Usage

  - ${data.usageInfo}

## Contributing

- ${data.contribGuidelines}

## Tests

- ${data.testExamples}

## License

- ${data.licenseChoice}

`;


}

module.exports = generateMarkdown;
