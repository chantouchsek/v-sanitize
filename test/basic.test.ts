import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Sanitize from '@/components/Sanitize.vue'
import VSanitize  from '../src/sanitize';

describe('Sanitize.vue', () => {
	it('sanitizes with directive', () => {
		const wrapper = mount(Sanitize, {
			global: {
				plugins: [VSanitize]
			}
		});

		const sanitizeDirectiveTestString: string = '<div data-test="sanitizeDirective">This better not work!<br><span style="color:red">This better work!</span></div>'

		const sanitizeDirective = wrapper.get('[data-test="sanitizeDirective"]')

		expect(sanitizeDirective.html()).toBe(sanitizeDirectiveTestString)
	});

	it('sanitizes with directive', () => {
		const wrapper = mount(Sanitize, {
			global: {
				plugins: [VSanitize]
			}
		});

		const sanitizeDirectiveTestString: string = '<div data-test="sanitizeDirective">This better not work!<br><span style="color:red">This better work!</span></div>'

		const sanitizeDirective = wrapper.get('[data-test="sanitizeDirective"]')

		expect(sanitizeDirective.html()).toBe(sanitizeDirectiveTestString)
	});
})

