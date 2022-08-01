// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a user license',
        choices: ['apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
]
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer
        .prompt(questions)
        .then((data) => {
            return writeToFile ('./dist/generated-README.md', generateMarkdown(data));
        })
        .catch (err => console.log(err));
}

// Function call to initialize app
init();
