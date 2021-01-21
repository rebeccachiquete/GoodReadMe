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
        message: 'Contribution Guidelines',
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

    ## Title 
    ${data.title}

   ## Table of Contents 
   <ul>
    <a href="Description"><li>Description<li></a>
    <a href="Data-Installation"><li>Data-Installation<li></a>
    <a href="Data-Usage"><li>Data-Usage<li></a>
    <a href="Contributions"><li>Contributions<li></a>
    <a href="Instructions"><li>Instructions<li></a>
    <a href="Questions"><li>Questions<li></a>
    <a href="License"><li>License<li></a>
    </ul>

    <h4 id="Description">Description</h4>
        ${data.description}

    <h4 id="Data-Installation">Data-Installation</h4>
        ${data.installation}

    <h4 id="Data-Usage">Data-Usage</h4>
        ${data.usage}

    <h4 id="Contributions">Contributions</h4>
        ${data.contribution}

    <h4 id="Instructions">Instructions</h4>
        ${data.instructions}

    <h4 id="Questions">Questions</h4>
        ${data.git}
        ${data.email}

    <h4 id="License">License</h4>
        ${data.license}

   `
  };