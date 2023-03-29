// * Returns a license badge based on which license chosen by user
function renderLicenseBadge(license) {
  let badgeLink = '';
  let licenseURL = `https://opensource.org/badge/license/`
  let licenseLink = '';

  if (license !== 'None') {

    switch (license) {
      case 'Apache 2.0':
        licenseLink = `${licenseURL}Apache-2.0/`;
        badgeLink = `![License](https://img.shields.io/badge/License-Apache-2.0-blue.svg)`;
        break;
      case 'GNU General Public v3.0':
        licenseLink = `${licenseURL}GPL-3-0/`;
        badgeLink = `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
        break;
      case 'MIT':
        licenseLink = `${licenseURL}MIT/`;
        badgeLink = `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
        break;
      case 'BSD 2-Clause':
        licenseLink = `${licenseURL}bsd-2-clause/`;
        badgeLink = `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
        break;
      case 'BSD 3-Clause':
        licenseLink = `${licenseURL}bsd-3-clause/`;
        badgeLink = `![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)`;
        break;
      case 'Boost Software':
        licenseLink = `https://www.boost.org/LICENSE_1_0.txt`;
        badgeLink = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
        break;
      case 'Eclipse Public 2.0':
        licenseLink = `${licenseURL}epl-2-0/`;
        badgeLink = `![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)`;
        break;
      // add more cases for other license choices as needed
      default: 'None';
        break;
    }
    return `[${license}](${licenseLink})${badgeLink}`;

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
* To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
* ![alt text](assets/images/screenshot.png)

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
