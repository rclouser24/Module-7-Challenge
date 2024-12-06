// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of the document."
    },
    {
        type:"input",
        name: "description",
        message: "Please enter a description."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license",
        choices: ['MIT', 'GPL', 'Apache', 'BSD 3-Clause', 'CC0', 'None']
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            console.log("error writing", err);
            return;
        }
        console.log('file written successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating README.md");
        // Write the README.md file directly to the current working directory
        writeToFile("README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
