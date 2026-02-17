/**
 * LoginPage - Page Object Model
 * Represents the OrangeHRM Login Page
 * Contains all selectors and methods for login functionality
 */

class LoginPage {
    // Page URL
    url = '/web/index.php/auth/login';

    // Selectors - Using descriptive names for better readability
    selectors = {
        usernameInput: 'input[name="username"]',
        passwordInput: 'input[name="password"]',
        loginButton: 'button[type="submit"]',
        errorMessage: '.oxd-alert-content-text',
        loginContainer: '.orangehrm-login-container',
        loginLogo: '.orangehrm-login-branding img',
        dashboardHeader: '.oxd-topbar-header-breadcrumb',
        userDropdown: '.oxd-userdropdown',
        forgotPasswordLink: '.orangehrm-login-forgot-header',
    };

    /**
     * Navigate to the login page
     */
    visit() {
        cy.visit(this.url);
        // Wait for page to load completely
        cy.get(this.selectors.loginContainer, { timeout: 10000 }).should('be.visible');
        return this;
    }

    /**
     * Verify the login page is loaded correctly
     */
    verifyPageLoaded() {
        cy.get(this.selectors.loginLogo).should('be.visible');
        cy.get(this.selectors.usernameInput).should('be.visible');
        cy.get(this.selectors.passwordInput).should('be.visible');
        cy.get(this.selectors.loginButton).should('be.visible');
        cy.title().should('contain', 'OrangeHRM');
        return this;
    }

    /**
     * Enter username in the username field
     * @param {string} username - The username to enter
     */
    enterUsername(username) {
        cy.get(this.selectors.usernameInput)
            .should('be.visible')
            .clear()
            .type(username, { delay: 50 });
        return this;
    }

    /**
     * Enter password in the password field
     * @param {string} password - The password to enter
     */
    enterPassword(password) {
        cy.get(this.selectors.passwordInput)
            .should('be.visible')
            .clear()
            .type(password, { delay: 50 });
        return this;
    }

    /**
     * Click the login button
     */
    clickLoginButton() {
        cy.get(this.selectors.loginButton)
            .should('be.visible')
            .should('not.be.disabled')
            .click();
        return this;
    }

    /**
     * Complete login process with username and password
     * @param {string} username - The username
     * @param {string} password - The password
     */
    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
        return this;
    }

    /**
     * Verify successful login by checking dashboard elements
     */
    verifyLoginSuccess() {
        cy.url({ timeout: 15000 }).should('include', '/dashboard');
        cy.get(this.selectors.dashboardHeader, { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Dashboard');
        cy.get(this.selectors.userDropdown).should('be.visible');
        return this;
    }

    /**
     * Verify login failure with error message
     */
    verifyLoginFailure() {
        cy.get(this.selectors.errorMessage, { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Invalid credentials');
        cy.url().should('include', '/auth/login');
        return this;
    }

    /**
     * Get the username input element
     */
    getUsernameInput() {
        return cy.get(this.selectors.usernameInput);
    }

    /**
     * Get the password input element
     */
    getPasswordInput() {
        return cy.get(this.selectors.passwordInput);
    }

    /**
     * Get the login button element
     */
    getLoginButton() {
        return cy.get(this.selectors.loginButton);
    }

    /**
     * Verify forgot password link is present
     */
    verifyForgotPasswordLink() {
        cy.get(this.selectors.forgotPasswordLink)
            .should('be.visible')
            .and('contain', 'Forgot your password');
        return this;
    }

    /**
     * Check if login button is enabled
     */
    isLoginButtonEnabled() {
        return cy.get(this.selectors.loginButton).should('not.be.disabled');
    }

    /**
     * Take a screenshot with a custom name
     * @param {string} screenshotName - Name for the screenshot
     */
    takeScreenshot(screenshotName) {
        cy.screenshot(screenshotName);
        return this;
    }

    /**
     * Verify responsive design elements
     * @param {number} width - Viewport width
     * @param {number} height - Viewport height
     */
    verifyResponsiveLayout(width, height) {
        cy.viewport(width, height);
        cy.get(this.selectors.loginContainer).should('be.visible');
        cy.get(this.selectors.usernameInput).should('be.visible');
        cy.get(this.selectors.passwordInput).should('be.visible');
        cy.get(this.selectors.loginButton).should('be.visible');
        return this;
    }
}

// Export the LoginPage class
export default LoginPage;
