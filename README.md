# v-sanitize

Whitelist-based HTML sanitizer (sanitize-html) for Vue.js apps.

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License" />
  </a>
  <a href="https://npmjs.org/package/v-sanitize">
    <img src="https://img.shields.io/npm/v/v-sanitize.svg?style=flat-square" alt="Packagist" />
  </a>
  <a href="https://github.com/chantouchsek/v-sanitize/releases">
    <img src="https://img.shields.io/github/release/chantouchsek/v-sanitize.svg?style=flat-square" alt="Latest Version" />
  </a>
  <a href="https://github.com/chantouchsek/v-sanitize/issues">
    <img src="https://img.shields.io/github/issues/chantouchsek/v-sanitize.svg?style=flat-square" alt="Issues" />
  </a>
  <a href="https://npmjs.com/package/v-sanitize">
    <img src="https://img.shields.io/npm/dt/v-sanitize.svg?style=flat-square" alt="Download" />
  </a>  
  <a href="https://npmjs.com/package/v-sanitize">
    <img src="https://img.shields.io/npm/dm/v-sanitize.svg?style=flat-square" alt="Download" />
  </a>
  <a href="https://npmjs.com/package/v-sanitize">
    <img src="https://img.shields.io/npm/dw/v-sanitize.svg?style=flat-square" alt="Download" />
  </a>

</p>

## Note

We should always sanitize user input values on the server. Do sanitize with Vue only for necessary cases (e.g markdown
preview).

## Install

```
npm install --save v-sanitize
```

or

```
yarn add v-sanitize
```

## Usage

Register the plugin

```js
import Vue from 'vue';
import VSanitize from "v-sanitize";

Vue.use(VSanitize);
```

## Use with NuxtJS

`nuxt.config.js`

```js
export default {
  modules: [
    ['v-sanitize/nuxt', { /* options */ }]
  ],
  sanitize: { /* options */ }
}
```

You can pass default options too:

```js
defaultOptions = {
    allowedTags: ['a', 'b'],
    allowedAttributes: {
      'a': [ 'href' ]
    }
};
Vue.use(VSanitize, defaultOptions);
```

Use it in your components:

```vue
<template>
  <div contenteditable="true" @paste="sanitize"></div>
</template>

<script>
export default {
  methods: {
    sanitize(event) {
      event.preventDefault();
      const html = this.$sanitize(event.clipboardData.getData('text/html'));
      //or
      //const html = this.$sanitize(
      //  event.clipboardData.getData('text/html'),
      //  {
      //    allowedTags: ['b', 'br']
      //  }
      //);
      document.execCommand('insertHTML', false, (html));
    }
  },
}
</script>
```

## API

### `Vue.use(VSanitize[, defaultOptions])`

#### options

* Type: `Object`

This plugin is dependent on [sanitize-html](https://github.com/punkave/sanitize-html). For details, see
here https://github.com/punkave/sanitize-html#readme.

### `this.$sanitize(dirty[, options])`

#### dirty

* Type: `String`
* Required: `true`

#### options

* Type: `Object`

If you don't pass an options, the default options will be used.

#### `VSanitize.defaults`

Return `sanitizeHtml.defaults`.

## Directive

[Vue](https://vuejs.org)'s default `v-text` is HTML-insensitive, while `v-html` doesn't perform sanitization by default.

`v-sanitize` is a Vue directive for HTML sanitization, powered by the
flexible [sanitize-html](https://www.npmjs.com/package/sanitize-html). The directive can receive either a string, that
will undergo a partial sanitization if no modifier is present, or an array of two elements, the first being
a `sanitize-html` whitelist ([know more here](https://github.com/punkave/sanitize-html)) and the second being the string
to be sanitized.

```html
<div v-sanitize="unsafe_html"></div>
```

### Strip all tags (`.strip` modifier)

Removes all HTML tags, keeping just the text content.

```html
<span v-sanitize.strip="unsafe_html"></span>
```

### Remove unsafe tags (default/ `.basic` modifier)

Allows some HTML tags, but remove unsafe content, like `<script/>` and `<iframe/>` tags.

```html
<span v-sanitize.basic="unsafe_html"></span> = <span v-sanitize="unsafe_html"></span>
```

### Keep inline styles (`.inline` modifier)

Removes most tags, keeping only inline formatting and `<br/>` tags.

```html
<span v-sanitize.inline="unsafe_html"></span>
```

### Allow all tags (`.nothing` modifier)

Allows all HTML tags, not performing sanitization. For all effects, it's a replacement for `v-html`.

```html
<span v-sanitize.nothing="unsafe_html"></span>
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Security

If you discover any security related issues, please email chantouchsek.cs83@gmail.com instead of using the issue
tracker.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
