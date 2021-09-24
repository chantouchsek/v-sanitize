/*
Nuxt.js module for v-sanitize

Usage:
    - Install v-sanitize package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Optionally passing options in module configuration
            ['v-sanitize/nuxt', {/.* options *./}]
        ],
        // Optionally passing options in module top level configuration
        sanitize: {/.* options *./}
    }
*/

const { resolve } = require('path');
const mergeWith = require('lodash.mergewith');
const isArray = require('lodash.isarray');
import { FILTER_BASIC } from '../src'

const mergeCustomizer = (objValue, srcValue) => isArray(objValue) ? srcValue : undefined;
const mergeOptions = (defaults, userOpt) => mergeWith({}, defaults, userOpt, mergeCustomizer);

module.exports = function nuxtVSanitizeModule() {
  const { sanitize = {} } = this.options;
  const options = mergeOptions(FILTER_BASIC, sanitize);

  this.addPlugin({
    src: resolve(__dirname, 'v-sanitize-plugin.template.js'),
    fileName: 'v-sanitize.js',
    options,
  });
  this.options.build.transpile.push(/^sanitize-html/);
}

// required by nuxt
module.exports.meta = require('../package.json');
