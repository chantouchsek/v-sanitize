import sanitizeHtml, {IOptions} from 'sanitize-html'
import _Vue from "vue";

export const FILTER_BASIC: IOptions = sanitizeHtml.defaults
export const FILTER_INLINE: IOptions = {
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
export const FILTER_NOTHING: IOptions = {
    allowedTags: false,
    allowedAttributes: false
}
export const FILTER_STRIP: IOptions = {
    allowedTags: [],
    allowedAttributes: {}
}
interface Options {
    name?: string
}

const VSanitize = {
    install (Vue: typeof _Vue, options: Options = {}) {
        const defaultOptions = options;
        const { name = 'sanitize' } = defaultOptions;
        delete defaultOptions.name
        const options1 = { ...defaultOptions } as IOptions
        Vue.prototype[`$${name}`] = (dirty: string, opts = undefined) => sanitizeHtml(dirty, opts || options1);
        Vue.directive(name,  (el, binding) => {
            if (binding.value !== binding.oldValue) {
                if (Array.isArray(binding.value)) {
                    el.innerHTML = sanitizeHtml(binding.value[1], binding.value[0])
                } else {
                    if (binding.modifiers.strip) {
                        el.innerHTML = sanitizeHtml(binding.value, FILTER_STRIP)
                    } else if (binding.modifiers.basic) {
                        el.innerHTML = sanitizeHtml(binding.value, options1)
                    } else if (binding.modifiers.inline) {
                        el.innerHTML = sanitizeHtml(binding.value, FILTER_INLINE)
                    } else if (binding.modifiers.nothing) {
                        el.innerHTML = sanitizeHtml(binding.value, FILTER_NOTHING)
                    } else {
                        el.innerHTML = sanitizeHtml(binding.value, options1)
                    }
                }
            }
        })
    },
    defaults: FILTER_BASIC
};

export default VSanitize;
