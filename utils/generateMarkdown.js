// * Returns a license badge based on which license chosen by user
function renderLicenseBadge(license) {
  let badgeLink = '';
  let licenseURL = `https://opensource.org/license/`
  let licenseLink = '';

  if (license !== 'None') {
    badgeLink = `![License](https://img.shields.io/badge/License-${license}-green.svg)`;

    switch (license) {
      case 'Apache License 2.0':
        licenseLink = `${licenseURL}Apache-2.0/`;
        break;
      case 'GNU General Public v3.0':
        licenseLink = `${licenseURL}GPL-3.0/`;
        break;
      case 'MIT':
        licenseLink = `${licenseURL}MIT/`;
        break;
      case 'BSD 2-Clause':
        licenseLink = `${licenseURL}bsd-2-clause/`;
        break;
      case 'BSD 3-Clause':
        licenseLink = `${licenseURL}bsd-3-clause/`;
        break;
      case 'Boost Software':
        licenseLink = `${licenseURL}bsl1-0-html/`;
        break;
      case 'Eclipse Public 2.0':
        licenseLink = `${licenseURL}epl-2-0/`;
        break;
      // add more cases for other license choices as needed
      default: 'None';
        break;
    }
    return `[${license}](${licenseLink})\n 
    ${badgeLink}`;

  } else {
    return '';
  }
}

// * Called from index to generate user README - purpose of this app
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
  [Credits](#credits)\n
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
  ${renderLicenseBadge(data.license)}

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
