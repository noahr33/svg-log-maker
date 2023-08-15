import inquirer from "inquirer"
import { generateLogo } from "./lib/generateLogo.js"


inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Type in the text for your logo. (Up to three characters)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Type the color you would like your text color to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Type the color you would like your shape color to be?'
    }
])
    .then(data => {
        generateLogo(`logo.svg`, data)
    })



