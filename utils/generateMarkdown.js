function generateMarkdown(data) {

  return `
# ${data.title} ![Version](https://img.shields.io/github/package-json/v/yarocruz/readme-generator)

## Description

${data.description} 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributing](#contributing)
* [Questions?](#questions)

## Installation

To install project dependencies run:

\`\`\`
${data.installation}
\`\`\`

## Tests

To run tests run:

\`\`\`
${data.tests}
\`\`\`

## Usage

${data.usage}

## License

${data.license} 

## Contributing

${data.contributing}

## Questions?

<img src="${data.profilePic}" alt="avatar-picture" style="border-radius: 50px" width="100px" />

Have any questions? Want to collaborate on a project? Shoot me an [email](${data.email})
  `;
}

module.exports = generateMarkdown;