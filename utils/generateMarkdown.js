function generateMarkdown(data) {

  return `
# ${data.title} ![Version](https://img.shields.io/github/package-json/v/yarocruz/readme-generator)

## Description

${data.description} 

## ${data.tableOfContents} 

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Deployment](#deployment)
* [Contributing](#contribute)
* [License](#license)

## ${data.installation}

## ${data.usage}

## License

${data.license} 

## ${data.contributing}

## ${data.tests}

## Questions?
![alt text](${data.profilePic})

${data.name}

Have any questions? Want to collaborate on a project? Shoot me an [email](${data.email})
  `;
}

module.exports = generateMarkdown;