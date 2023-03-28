// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.descripHow} 
  ${data.descripWhy}
  ${data.descripLearn}

  ## Table of Contents
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Credits](#credits))\n
  [Tests](#tests)\n
  [Contact](#contact)\n

  ## Installation
  ${data.installSteps}

  ## Usage
  ${data.usage}
  
  ### Screenshot
  // * To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  // * ![alt text](assets/images/screenshot.png)


  ## License
  ${data.license}

  ## Credits
  ${data.collabs}

  ## Tests
  ${data.tests}

  ## Contact
  for additional questions...
  
  On Github: https://github.com/${data.gHubUser}
  ${data.email}
`;
}

module.exports = generateMarkdown;
