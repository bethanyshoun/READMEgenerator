//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `
    ![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
    `;
  }
  else {
    return '';
  }
}


//Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
      [${license}](https://choosealicense.com/licenses/${license})
    `;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
  ## License

  This application is covered under the following license:

  ${renderLicenseLink(license)}
    `;
  }
    else {
      return '';
    }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}
          
## Installation
${data.installation}

## Usage 
${data.usage}

${renderLicenseSection(data.license)}

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
