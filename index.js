const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const axios = require('axios')

const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        default: 'username'
    },
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title',
        default: 'Title'
    },
    {
        type: 'input',
        message: 'Add a description for your project',
        name: 'description',
        default: 'Description'
    },
    {
        type: 'input',
        message: 'What command to run to install dependencies',
        name: 'installation',
        default: 'Installation'
    },
    {
        type: 'input',
        message: 'What command to run to for testing',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know to use this repo',
        name: 'usage',
        default: 'Usage'
    },
    {
        type: 'input',
        message: 'How can the user contribute',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'License',
        name: 'license',
        default: 'MIT'
    },

]

function writeToFile(fileName, data) {
    writeFileAsync(fileName, data).then(function () {
        console.log('README file created.');
    })
        .catch(err => {
            console.log(err);
        })
}

function init() {
    inquirer.prompt(questions)
        .then(response => {

            const queryURL = `https://api.github.com/users/${response.github}`;
            axios.get(queryURL)
                .then(res => {
                    const data = {
                        username: response.username,
                        title: response.title,
                        description: response.description,
                        tableOfContents: response.tableOfContents,
                        installation: response.installation,
                        usage: response.usage,
                        tests: response.tests,
                        license: response.license,
                        contributing: response.contributing,

                        name: res.data.login,
                        email: "yarocruz@gmail.com",
                        profilePic: res.data.avatar_url,
                    }
                    const readmeContent = generateMarkdown(data);
                    writeToFile('README-test.md', readmeContent);
                })
                .catch(err => {
                    if (err) throw Error;
                })


        })
        .catch(err => {
            console.log(err);
        })
}

init();
