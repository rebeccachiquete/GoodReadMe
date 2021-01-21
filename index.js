const inquirer = require('inquirer');
const fs = require('fs')
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Projects Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions',
      },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information',
    },
    {
        type: 'input',
        name: 'git',
        message: 'What is your Github Account',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License are being used?',
        choices: [
            "GLP",
            "MIT",
            "BDS",
            "UNKNOWN",

        ],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Controbution Guidelines',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Test Instructions',
    },
  ])
  .then((data) => {
    const secondreadme = `${data.title.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(secondreadme, createMD(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });

  function createMD(data) {
    return`

    # Title #
        ${data.title}
    ## Descriptiomn ##    
        ${data.description}
    ### Data Installation ###
        ${data.installation}
    ### Data Usage ###
        ${data.usage}
    ### Contributions ###
        ${data.contribution}
    ### Instructions ###
        ${data.instructions}
    ### Questions? ###
        ${data.git}
        ${data.email}
   `
  };