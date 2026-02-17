const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: true,
    screenshotOnRunFailure: true,
    videoCompression: 32,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    // Test file patterns
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    
    // Retry configuration
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
  
  // Environment variables
  env: {
    username: 'Admin',
    password: 'admin123',
  },
  
  // Screenshots folder
  screenshotsFolder: 'cypress/screenshots',
  
  // Videos folder
  videosFolder: 'cypress/videos',
  
  // Responsive viewports for testing
  viewports: {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 667 },
  },
});
