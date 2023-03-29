// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions awaiting user CLI Input once prompted
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.error('Answer Required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'descripHow',
        message: 'Describe how your application functions. (Required)',
        validate: descripHow => {
            if (descripHow) {
                return true;
            } else {
                console.error('Answer Required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'descripWhy',
        message: 'What problem(s) does your application solve? (Required)',
        validate: descripWhy => {
            if (descripWhy) {
                return true;
            } else {
                console.error('Answer Required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'descripLearn',
        message: 'What did you learn in the process of building this app? (Required)',
        validate: descripLearn => {
            if (descripLearn) {
                return true;
            } else {
                console.error('Answer Required!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'installSteps',
        message: 'Please include specific details (if/any) that a user needs to know in order to use this application',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. You should add a screenshot here too - See generated README.md for more details',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide any and all instructions with examples that are necessary to utilize this application',
        choices: ['None', 'Apache License 2.0', 'GNU General Public v3.0', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Eclipse Public 2.0'],
    },
    {
        type: 'input',
        name: 'collabs',
        message: 'If you would like to add contributors to this application, add their names and/or Github usernames here',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',

    },
    {
        type: 'input',
        name: 'gHubUser',
        message: 'Enter your Github username. (Required)',
        validate: gHubUser => {
            if (gHubUser) {
                return true;
            } else {
                console.log('Gimme dat username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address to be reached for additional questions. (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('yo [fe]male, what\'s yo email?')
                return false;
            }
        }
    },
];

// * function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const readmeContent = generateMarkdown(answers);

            // * After promise above is complete, this creates the generated READYOU.md file with all returned data
            fs.writeFileSync('READYOU.md', readmeContent, (error) => error ? console.log(error) : console.log('successfully created READYOU.md!'));
        })
};

// Function call to initialize app
init();
