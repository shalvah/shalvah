const program = require('commander');
const inquirer = require('inquirer');
const opn = require('opn');
const shalvah = require('./src/shalvah');

program.version('0.1.0')
    .description('Shalvah in your command-line')
    .parse(process.argv);

inquirer.prompt([
    {
        name: 'link',
        type: 'list',
        message: shalvah.bio + '\n' + shalvah.prompt,
        choices: shalvah.links
    }
]).then(answers => {
    console.log(`Opening ${answers.link}`);
    opn(answers.link);
});
