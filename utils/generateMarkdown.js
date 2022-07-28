/*
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge = (license) => {
  if (license === "none") {
    return ``;
  };
  /* check
  else {
    return `![License](https://img.shields.io/badge/License-${license}-<blue>)`;
  }
  */
 /*
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}
*/
// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `# ${data.title}

${data.license}

## Descriptiion
${data.description}
          
## Installation
${data.installation}

## Usage 
${data.usage}

## Contributing
${data.contributing}

## Test Instructions
${data.tests}

## Questions
View my GitHub repository at
[${data.github}](https://github.com/${data.github}/)

Email me at
${data.email}

`;
}

module.exports = generateMarkdown;
