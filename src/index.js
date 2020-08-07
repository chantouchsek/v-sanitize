const sanitizeHtml = require("sanitize-html");

const VSanitize = {
  install (Vue, options = {}) {
    const defaultOptions = options;
    Vue.prototype.$sanitize = (dirty, opts = null) => sanitizeHtml(dirty, opts || defaultOptions);
  },
  defaults: sanitizeHtml.defaults
};

export default VSanitize;
