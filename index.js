// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome! Enter your Github username.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You must provide a way for a way to contact you.');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
            return true;
          } else {
            console.log("Enter your project description here!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for usage?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Providing instructions for usage will help users properly navigate your project. Please try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter credits for your project.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter credits for your project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a preferred license for your project.',
        choices: ['MIT', 'ISC', 'EPL-1.0', 'CC0-1.0', 'apache-2.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide guidelines on how others can contribute to your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can your project be tested?',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter information on how your project can be tested!');
            return false;
          }
        }
      }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const writeToFile = fileData => {
    return new Promise ((resolve, reject) => {
        fs.writeToFile('./dist/README.md', fileData, err => {
    //if there is an error, the promise is rejected
       if (err) {
        reject(err);
        return;
       }
       //return out of the function to prevent the so that the Promise does not continue to carry out the resolve function
       resolve({
        ok: true,
        message: 'Done! README File created!'
       });
   });
 });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then (readmeData => {
        return generateMarkdown(readmeData)
    })
    .then (readmeData => {
        return writeToFile(readmeData)
      })
      .catch(err => {
        console.log(err);
      });
}

// Function call to initialize app
init();
