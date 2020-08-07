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
const merge = require('lodash.merge')

module.exports = function nuxtVSanitizeModule () {
  const { sanitize = {} } = this.options;
  const defaultOptions = {
    allowedTags: [
      'th', 'td', 'pre', 'iframe',
      'thead', 'caption', 'tbody', 'tr',
      'code', 'hr', 'br', 'div', 'table',
      'h3', 'h4', 'h5', 'h6', 'blockquote',
      'p', 'a', 'ul', 'ol', 'nl', 'li', 'b',
      'i', 'strong', 'em', 'strike', 'abbr'
    ],
    disallowedTagsMode: 'discard',
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      img: ['src']
    },
    selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
    allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false
  }
  const options = merge({}, defaultOptions, sanitize)

  this.addPlugin({
    src: resolve(__dirname, 'v-sanitize-plugin.template.js'),
    fileName: 'v-sanitize.js',
    options,
  });
  this.options.build.transpile.push(/^sanitize-html/);
}

// required by nuxt
module.exports.meta = require('../package.json');
