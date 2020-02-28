const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const axios = require('axios')

const generateMarkdown = require('./utils/generateMarkdown');
//const api = require('./utils/api');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
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
        message: 'What is your Github user Name',
        name: 'github',
        default: 'username'
    },
]

function writeToFile(fileName, data) {
    writeFileAsync(fileName, data).then(function () {
        console.log('Successfully wrote file');
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
