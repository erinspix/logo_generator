const { promptUserForLogoDetails } = require('./lib/userPrompt');
const { createLogoDocument } = require('./lib/docs');

async function main() {
    try {
        const logoDetails = await promptUserForLogoDetails();
        createLogoDocument(logoDetails);
    } catch (error) {
        console.error('Error during prompt or document creation:', error);
    }
}

main();
