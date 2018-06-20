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
        this.options.answers = answers
      })
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.options.answers
    )
    this.fs.copyTpl(
      this.templatePath('src/**/*.*'),
      this.destinationPath('./src/'),
      this.options.answers
    )
    this.fs.copy(this.templatePath('webpack/'), this.destinationPath('./'))
  }

  end () {
    this.log('Scaffolding finished')
  }
}
