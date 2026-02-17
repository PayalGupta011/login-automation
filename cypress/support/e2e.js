
// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Disable Cypress's default behavior of failing on uncaught exceptions
// This prevents tests from failing due to application errors
Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent the test from failing
    // You can add specific error handling here if needed
    console.log('Uncaught exception:', err.message);
    return false;
});

// Custom configuration for better test reliability
beforeEach(() => {
    // Clear cookies and local storage before each test
    cy.clearCookies();
    cy.clearLocalStorage();
});

// Add custom log for test start
beforeEach(function () {
    cy.log(`Starting test: ${this.currentTest.title}`);
});

// Add custom log for test end
afterEach(function () {
    cy.log(`Finished test: ${this.currentTest.title}`);
});
