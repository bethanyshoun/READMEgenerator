// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('You need to enter a project title!');
              return false;
            }
          }
    },
]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = readmeData => {
    console.log(`
==========================
Create Professional Readme
==========================
`);
/*
    //If no array, create one
    if (!readmeData.projects) {
        readmeData.projects = [];
    } 
    */
    return inquirer
        .prompt([""

        ]);
};

// Function call to initialize app
init()
    .then(questions)
    .then(readmeData => {
        return generateMarkdown(readmeData);
    });
