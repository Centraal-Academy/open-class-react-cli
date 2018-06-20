const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.log('constructor')
  }
  initializing () {
    this.log('starting own generator')
  }

  configuring () {
    this.log('configuring own generator')
  }

  prompting () {
    this.log('propmting generator')
  }

  writing () {
    this.log('writing files')
  }

  install () {
    this.log('install dependencies')
  }

  end () {
    this.log('This is over')
  }
}
