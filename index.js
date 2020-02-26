let fs = require('fs');
let inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'Title',
        name: 'title',
        default: 'Title'
    },
    {
        type: 'input',
        message: 'Description',
        name: 'description',
        default: 'Description'
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'tableOfContents',
        default: 'Table of Contents'
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
        default: 'Installation'
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
        default: 'Usage'
    },
    {
        type: 'input',
        message: 'License',
        name: 'license',
        default: 'MIT'
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contributing',
        default: 'anonymous'
    },
    {
        type: 'confirm',
        message: 'Tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your Github users Name',
        name: 'github',
        default: 'username'
    },

]).then(answers => {
    let content = `# ${answers.title} \n## ${answers.description}\n## ${answers.tableOfContents}\n## ${answers.installation}\n## ${answers.usage}\n## ${answers.license}\n## ${answers.contributing}\n## ${answers.tests}\n## ${answers.github} `
    fs.writeFile('README-test.md',
        content,
        function (err) {
            if (err) {
                return console.log(err);
            }
        })
})