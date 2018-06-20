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

  install () {
    const productionDependencies = ['react', 'react-dom', 'react-router-dom']
    const developmentDependencies = [
      'babel-core',
      'babel-loader',
      'babel-plugin-transform-object-rest-spread',
      'babel-preset-env',
      'babel-preset-react',
      'css-loader',
      'style-loader',
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
      'webpack-merge',
      'html-webpack-plugin',
      'webpack-bundle-analyzer'
    ]
    this.yarnInstall(productionDependencies)
      .then(() => this.yarnInstall(developmentDependencies, { 'dev': true }))
  }
  end () {
    this.log('Scaffolding finished')
  }
}
