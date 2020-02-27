const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

const generateMarkdown = require('./utils/generateMarkdown');

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
    axios.get(`https://api.github.com/users/${answers.github}`).then(function (res) {
        console.log(res.data.avatar_url)

        let content = generateMarkdown(answers);

        fs.writeFile('README-test.md', content, err => {
            if (err) {
                return console.log(err);
            }
        })
    })

})