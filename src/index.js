import sanitizeHtml from 'sanitize-html'

export const FILTER_BASIC = sanitizeHtml.defaults
export const FILTER_INLINE = {
  allowedTags: ['a', 'b', 'br', 'code', 'em', 'i', 'span', 'strike', 'strong', 'u'],
  allowedAttributes: {
    a: ['href', 'target'],
    span: ['style']
  },
  selfClosing: ['br'],
  allowedSchemes: ['ftp', 'http', 'https', 'mailto'],
  parser: {
    decodeEntities: true
  }
}
export const FILTER_NOTHING = {
  allowedTags: false,
  allowedAttributes: false
}
export const FILTER_STRIP = {
  allowedTags: [],
  allowedAttributes: []
}

const VSanitize = {
  install (Vue, options = {}) {
    const defaultOptions = options;
    const { name = 'sanitize' } = defaultOptions;
    Vue.prototype.$sanitize = (dirty, opts = null) => sanitizeHtml(dirty, opts || defaultOptions);
    Vue.directive(name,  (el, binding) => {
      if (binding.value !== binding.oldValue) {
        if (Array.isArray(binding.value)) {
          el.innerHTML = sanitizeHtml(binding.value[1], binding.value[0])
        } else {
          if (binding.modifiers.strip) {
            el.innerHTML = sanitizeHtml(binding.value, FILTER_STRIP)
          } else if (binding.modifiers.basic) {
            el.innerHTML = sanitizeHtml(binding.value)
          } else if (binding.modifiers.inline) {
            el.innerHTML = sanitizeHtml(binding.value, FILTER_INLINE)
          } else if (binding.modifiers.nothing) {
            el.innerHTML = sanitizeHtml(binding.value, FILTER_NOTHING)
          } else {
            el.innerHTML = sanitizeHtml(binding.value)
          }
        }
      }
    })
  },
  defaults: FILTER_BASIC
};

export default VSanitize;
