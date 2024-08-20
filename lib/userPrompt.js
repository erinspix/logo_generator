const inquirer = require('inquirer');

async function promptUserForLogoDetails() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'logoName',
            message: 'Enter the logo name (exactly three characters):',
            validate: input => input.length === 3 ? true : 'Please enter exactly three characters.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal):',
            validate: input => isValidColorInput(input) ? true : 'Please enter a valid color keyword or hexadecimal number.',
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Select a shape for the logo:',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hexadecimal):',
            validate: input => isValidColorInput(input) ? true : 'Please enter a valid color keyword or hexadecimal number.',
        }
    ]);
    return answers;
}

function isValidColorInput(input) {
    const colorKeywordPattern = /^(red|blue|green|yellow|purple)$/i;
    const hexPattern = /^#[0-9a-fA-F]{6}$/;
    return colorKeywordPattern.test(input.toLowerCase()) || hexPattern.test(input);
}

module.exports = { promptUserForLogoDetails };
