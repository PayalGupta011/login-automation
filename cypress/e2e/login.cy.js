/*OrangeHRM Login Automation Test Suite*/

import LoginPage from '../pages/LoginPage';

describe('OrangeHRM Login Automation', () => {
    let loginPage;
    let testData;

    
    before(() => {
        cy.fixture('testData').then((data) => {
            testData = data;
        });
    });

    
    beforeEach(() => {
        loginPage = new LoginPage();
        loginPage.visit();
    });

    
    it('TC001 - Should load the login page correctly with all elements visible', () => {
        cy.log('**Verifying login page elements**');

        // Verify page title
        cy.title().should('eq', testData.expectedPageTitle);

        // Verify all page elements are loaded
        loginPage.verifyPageLoaded();

        // Verify forgot password link
        loginPage.verifyForgotPasswordLink();

      
        loginPage.takeScreenshot('login-page-loaded');

        cy.log('✓ Login page loaded successfully with all elements');
    });

    /**
     * Test Case 2: Successful Login with Valid Credentials*/
    it('TC002 - Should login successfully with valid credentials', () => {
        cy.log('**Testing successful login flow**');

        // Get credentials from test data
        const { username, password } = testData.validCredentials;

       
        loginPage.takeScreenshot('before-login');

        // Perform login
        cy.log(`Entering username: ${username}`);
        loginPage.enterUsername(username);

        cy.log('Entering password');
        loginPage.enterPassword(password);

        // Verify login button is enabled
        loginPage.isLoginButtonEnabled();

        // Take screenshot with filled credentials
        loginPage.takeScreenshot('credentials-filled');

        // Click login button
        cy.log('Clicking login button');
        loginPage.clickLoginButton();

        // Verify successful login
        cy.log('Verifying successful login');
        loginPage.verifyLoginSuccess();

        // Verify URL contains dashboard
        cy.url().should('include', testData.expectedDashboardUrl);

        // Take screenshot after successful login
        cy.screenshot('login-success-dashboard');

        cy.log('✓ Login successful - User redirected to dashboard');
    });

    /* Test Case 3: Login Failure with Invalid Credentials */
    it('TC003 - Should show error message with invalid credentials', () => {
        cy.log('**Testing login with invalid credentials**');

        const { username, password } = testData.invalidCredentials;

        // Attempt login with invalid credentials
        cy.log(`Attempting login with invalid credentials`);
        loginPage.login(username, password);

        // Verify login failure
        cy.log('Verifying error message is displayed');
        loginPage.verifyLoginFailure();

        // Take screenshot of error
        loginPage.takeScreenshot('invalid-credentials-error');

        cy.log('✓ Error message displayed correctly for invalid credentials');
    });

    /*Test Case 4: Empty Username Field Validation*/
    it('TC004 - Should validate empty username field', () => {
        cy.log('**Testing empty username validation**');

        const { password } = testData.validCredentials;

        // Enter only password, leave username empty
        loginPage.enterPassword(password);
        loginPage.clickLoginButton();

        // Verify still on login page
        cy.url().should('include', '/auth/login');

        // Take screenshot
        loginPage.takeScreenshot('empty-username-validation');

        cy.log('✓ Empty username validation working correctly');
    });

    /**
     * Test Case 5: Empty Password Field Validation*/
    it('TC005 - Should validate empty password field', () => {
        cy.log('**Testing empty password validation**');

        const { username } = testData.validCredentials;

        // Enter only username, leave password empty
        loginPage.enterUsername(username);
        loginPage.clickLoginButton();

        // Verify still on login page
        cy.url().should('include', '/auth/login');

        // Take screenshot
        loginPage.takeScreenshot('empty-password-validation');

        cy.log('✓ Empty password validation working correctly');
    });

    /*Test Case 6: Both Fields Empty Validation*/
    it('TC006 - Should validate when both fields are empty', () => {
        cy.log('**Testing empty fields validation**');

        // Click login without entering credentials
        loginPage.clickLoginButton();

        // Verify still on login page
        cy.url().should('include', '/auth/login');

        // Take screenshot
        loginPage.takeScreenshot('both-fields-empty-validation');

        cy.log('✓ Both fields empty validation working correctly');
    });

    /*Test Case 7: Responsive Design - Desktop View*/
    it('TC007 - Should display correctly on desktop viewport (1920x1080)', () => {
        cy.log('**Testing desktop responsive design**');

        loginPage.verifyResponsiveLayout(1920, 1080);
        loginPage.takeScreenshot('desktop-1920x1080');

        cy.log('✓ Desktop viewport rendering correctly');
    });

    /*Test Case 8: Responsive Design - Tablet View*/
    it('TC008 - Should display correctly on tablet viewport (768x1024)', () => {
        cy.log('**Testing tablet responsive design**');

        loginPage.verifyResponsiveLayout(768, 1024);
        loginPage.takeScreenshot('tablet-768x1024');

        cy.log('✓ Tablet viewport rendering correctly');
    });

    /*Test Case 9: Responsive Design - Mobile View*/
    it('TC009 - Should display correctly on mobile viewport (375x667)', () => {
        cy.log('**Testing mobile responsive design**');

        loginPage.verifyResponsiveLayout(375, 667);
        loginPage.takeScreenshot('mobile-375x667');

        cy.log('✓ Mobile viewport rendering correctly');
    });

    /**
     * Test Case 10: UI Elements Interaction*/
    it('TC010 - Should verify all UI elements are interactable', () => {
        cy.log('**Testing UI elements interaction**');

        // Verify username field is interactable
        loginPage.getUsernameInput()
            .should('be.visible')
            .should('not.be.disabled')
            .type('test').clear();

        // Verify password field is interactable
        loginPage.getPasswordInput()
            .should('be.visible')
            .should('not.be.disabled')
            .type('test').clear();

        // Verify login button is clickable
        loginPage.getLoginButton()
            .should('be.visible')
            .should('not.be.disabled');

        loginPage.takeScreenshot('ui-elements-interaction');

        cy.log('✓ All UI elements are interactable');
    });

    // After each test - Log test completion
    afterEach(() => {
        cy.log('Test completed');
    });

    // After all tests - Generate summary
    after(() => {
        cy.log('All login tests completed successfully');
    });
});
 