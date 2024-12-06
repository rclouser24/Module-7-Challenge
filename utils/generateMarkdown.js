// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPL':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'BSD':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'None':
    default:
      return ''; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GPL':
      return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0.html)';
    case 'Apache':
      return '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'BSD':
      return '[BSD License](https://opensource.org/licenses/BSD-2-Clause)';
    default:
      return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }

  return `## License
  This project is licensed under the ${renderLicenseLink(license)} license.

${renderLicenseBadge(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
For questions, you can reach me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).
  `;
}

export default generateMarkdown;
