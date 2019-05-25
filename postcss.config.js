const postcssAutoprefixer = require('autoprefixer')
const postcssCalc = require('postcss-calc')
const postcssClean = require('postcss-clean')
const postcssConditionals = require('postcss-conditionals')
const postcssEach = require('postcss-each')
const postcssFor = require('postcss-for')
const postcssImport = require('postcss-import')
const postcssMixins = require('postcss-mixins')
const postcssMixColor = require('postcss-mix-color')
const postcssNested = require('postcss-nested')
const postcssSelectorNot = require('postcss-selector-not')
const postcssVars = require('postcss-simple-vars')
const postcssUnprefix = require('postcss-unprefix')
const postcssVariables = require('./variables')

const env = process.env.NODE_ENV || 'development'
const isProductionEnv = env === 'production'

module.exports = {
  plugins: [
    postcssImport,
    postcssUnprefix,
    postcssSelectorNot,
    postcssMixins,
    postcssEach,
    postcssVars({
      variables: postcssVariables
    }),
    postcssCalc,
    postcssNested,
    postcssFor,
    postcssConditionals,
    postcssMixColor,
    postcssAutoprefixer,
    postcssClean(isProductionEnv ? undefined : {
      format: {
        breaks: {
          afterAtRule: true,
          afterBlockBegins: true,
          afterBlockEnds: true,
          afterComment: true,
          afterProperty: true,
          afterRuleBegins: true,
          afterRuleEnds: true,
          beforeBlockEnds: true,
          betweenSelectors: true
        },
        spaces: {
          aroundSelectorRelation: true,
          beforeBlockBegins: true,
          beforeValue: true
        },
        semicolonAfterLastProperty: true,
        indentBy: 2
      }
    })
  ]
}
