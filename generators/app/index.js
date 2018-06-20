const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  prompting () {
    const questions = [
      {
        type: 'input',
        name: 'appname',
        message: 'Application name',
        default: 'react-app'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Application description',
        default: 'scaffolding react app'
      }
    ]
    return this.prompt(questions)
      .then(answers => {
        console.log(answers)
      })
  }

  end () {
    this.log('Scaffolding finished')
  }
}
