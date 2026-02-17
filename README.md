# OrangeHRM Login Automation - Cypress Project

## 📋 Project Overview

This project automates the login functionality of the OrangeHRM demo website using **Cypress** and the **Page Object Model (POM)** design pattern.

**Application Under Test:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

**Credentials:**
- Username: `Admin`
- Password: `admin123`

---

## 🏗️ Project Structure

```
login/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js                 # Login test specification
│   ├── pages/
│   │   └── LoginPage.js                # Page Object Model for Login Page
│   ├── support/
│   │   ├── commands.js                 # Custom Cypress commands
│   │   └── e2e.js                      # Support file
│   └── fixtures/
│       └── testData.json               # Test data
├── test-cases/
│   └── TestCases.xlsx                  # Test cases documentation
├── screenshots/                         # Execution screenshots
├── videos/                              # Execution recordings
├── cypress.config.js                   # Cypress configuration
├── package.json                        # Dependencies
├── .gitignore                          # Git ignore file
└── README.md                           # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd login
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## 🧪 Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npx cypress open
```
Then select E2E Testing and choose your browser.

### Run Tests in Headless Mode
```bash
npx cypress run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

### Run with Specific Browser
```bash
npx cypress run --browser chrome
```

---

## 📱 Responsive Testing

This project includes responsive testing configurations for multiple devices:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

---

## 📊 Test Cases

Detailed test cases are documented in the `test-cases/TestCases.xlsx` file, including:
- Test Case ID
- Test Description
- Preconditions
- Test Steps
- Expected Results
- Actual Results
- Status (Pass/Fail)

---

## 🎯 Features

✅ **Page Object Model (POM)** - Clean, maintainable code structure  
✅ **Custom Commands** - Reusable Cypress commands  
✅ **Test Data Management** - Externalized test data in fixtures  
✅ **Detailed Reporting** - Screenshots and videos on failure  
✅ **Error Handling** - Robust error handling and assertions  
✅ **Well-Structured Repository** - Professional organization  
✅ **Multiple Commits** - Incremental development with clear commit messages  

---

## 📸 Proof of Execution

- **Screenshots:** Available in `/screenshots` folder after test execution
- **Videos:** Available in `/videos` folder after headless test runs
- **Reports:** Console output with detailed test results

---

## 🔧 Technology Stack

- **Testing Framework:** Cypress v13.x
- **Language:** JavaScript (ES6+)
- **Design Pattern:** Page Object Model (POM)
- **Version Control:** Git & GitHub

---

## 👤 Author

Created as part of the automation testing assessment.

---

## 📝 License

ISC License

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📞 Support

For any queries or issues, please create an issue in the GitHub repository.
