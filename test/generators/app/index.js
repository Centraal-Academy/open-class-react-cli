/* eslint-env mocha */
const path = require('path')
const helpers = require('yeoman-test')
const assert = require('yeoman-assert')

describe('test suite app generator', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../../../generators/app'))
      .inTmpDir()
      .withPrompts({ appname: 'react-app', description: 'sample app' })
  })

  it('generates a package.json', function () {
    assert.file('package.json')
    assert.fileContent('package.json', 'sample app')
  })

  it('generates src files', function () {
    assert.file('src/index.js')
    assert.file('src/index.html')
    assert.fileContent('src/index.js', 'react-app')
    assert.fileContent('src/index.html', 'react-app')
  })

  it('copy webpack files', function () {
    assert.file('webpack.common.js')
    assert.file('webpack.dev.config.js')
    assert.file('webpack.config.js')
  })
})
