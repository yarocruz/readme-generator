let fs = require('fs');
let inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'Title',
        name: 'title'
    }
]).then(answers => {
    fs.appendFile('README-test.md', `# ${answers.title}`, function (err) {
        if (err) {
            return console.log(err);
        }
    })
})