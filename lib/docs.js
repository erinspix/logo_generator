const fs = require('fs');
const path = require('path');
const { Square, Circle, Triangle } = require('./shapes');

function createLogoDocument(logoDetails) {
    const { shapeType, shapeColor, logoName, textColor } = logoDetails;

    let logoShape;

    switch (shapeType.toLowerCase()) {
        case 'square':
            logoShape = new Square(logoName, textColor, shapeColor);
            break;
        case 'circle':
            logoShape = new Circle(logoName, textColor, shapeColor);
            break;
        case 'triangle':
            logoShape = new Triangle(logoName, textColor, shapeColor);
            break;
        default:
            console.log('Invalid shape type.');
            return;
    }

    saveLogoFile(logoShape.render());
    
    console.log('Your logo was created successfully.');
}

function saveLogoFile(svgContent) {
    fs.writeFileSync('./logo.svg', svgContent);
}

module.exports = { createLogoDocument };
