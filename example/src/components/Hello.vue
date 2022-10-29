<script setup lang="ts">
	import { inject } from 'vue'
	import { Sanitizer } from '@/src/sanitize'

	const $sanitize: Sanitizer | undefined = inject('sanitize')
	const testString: string = '<div class="blue">This better not work!</div><br/><span style="color: red;">This better work!</span>'

	const sanitizedString: string = $sanitize
		? $sanitize('<span style="color: blue">Test</span>', {
			allowedTags: ['div'],
			allowedAttributes: { div: ['class'] }
		})
		: 'sanitizer not found!'
</script>

<template>
	<main>
		<section class="wrapper">
			<div class="wrapper__logo">
				<img src="../assets/img/vue-logo.svg" />
			</div>

			<p>
				Hello World!
			</p>

			<div v-sanitize.inline="testString" />

			<div v-html="sanitizedString" />
		</section>
	</main>
</template>

<style lang="scss">
	html,
	body,
	main,
	#app {
		height: 100%;
	}

	.wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		&__logo {
			width: 300px;
			height: 300px;
		}
	}
</style>
