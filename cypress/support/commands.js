
/**
 * Custom command to perform login
 * @param {string} username - The username
 * @param {string} password - The password
 */
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

/**
 * Custom command to logout
 */
Cypress.Commands.add('logout', () => {
    cy.get('.oxd-userdropdown').click();
    cy.contains('Logout').click();
});

/**
 * Custom command to verify element visibility with timeout
 * @param {string} selector - CSS selector
 * @param {number} timeout - Timeout in milliseconds
 */
Cypress.Commands.add('verifyVisible', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('be.visible');
});

/**
 * Custom command to verify URL contains text
 * @param {string} urlPart - Part of URL to verify
 */
Cypress.Commands.add('verifyUrl', (urlPart) => {
    cy.url().should('include', urlPart);
});

/**
 * Custom command to take screenshot with timestamp
 * @param {string} name - Screenshot name
 */
Cypress.Commands.add('captureScreen', (name) => {
    const timestamp = new Date().getTime();
    cy.screenshot(`${name}-${timestamp}`);
});

/**
 * Custom command to wait for page load
 */
Cypress.Commands.add('waitForPageLoad', () => {
    cy.document().should('have.property', 'readyState', 'complete');
});

/**
 * Custom command to verify responsive layout
 * @param {string} device - Device name (mobile, tablet, desktop)
 */
Cypress.Commands.add('setViewport', (device) => {
    const viewports = {
        mobile: [375, 667],
        tablet: [768, 1024],
        desktop: [1920, 1080],
    };

    if (viewports[device]) {
        cy.viewport(viewports[device][0], viewports[device][1]);
    }
});

// Overwrite the visit command to add page load wait
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    const opts = Object.assign({}, options, {
        onBeforeLoad: (win) => {
            win.document.addEventListener('DOMContentLoaded', () => {
                console.log('Page loaded');
            });
        }
    });
    return originalFn(url, opts);
});
