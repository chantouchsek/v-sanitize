import sanitizeHtml, { IOptions } from 'sanitize-html'
import { App, DirectiveBinding, Directive, Plugin } from 'vue';

interface Options {
	name?: string
}

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
export type Sanitizer = (dirty?: any, options?: IOptions) => string

const VSanitize: Plugin = {
	install(app: App, options: Options = {}): void {
		const defaultOptions = options;
		const { name = 'sanitize' } = defaultOptions;
		delete defaultOptions.name
		const options1 = { ...defaultOptions, ...FILTER_BASIC } as IOptions

		(app.config.globalProperties[`$${name}`] as Sanitizer) = (dirty: string, opts = undefined) => sanitizeHtml(dirty, opts || options1);

		app.directive(name, <Directive<HTMLElement, string>>{
			created(el, binding: DirectiveBinding) {
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
			}
		})

		app.provide(name, sanitizeHtml)
	}
};

export default VSanitize;
