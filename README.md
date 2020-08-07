# v-sanitize

Whitelist-based HTML sanitizer (sanitize-html) for Vue.js apps.

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License" />
  </a>
  <a href="https://npmjs.org/package/v-sanitize">
    <img src="https://img.shields.io/npm/v/v-sanitize.svg?style=flat-square" alt="Packagist" />
  </a>
  <a href="https://github.com/Chantouch/v-sanitize/releases">
    <img src="https://img.shields.io/github/release/Chantouch/v-sanitize.svg?style=flat-square" alt="Latest Version" />
  </a>

  <a href="https://github.com/Chantouch/v-sanitize/issues">
    <img src="https://img.shields.io/github/issues/Chantouch/v-sanitize.svg?style=flat-square" alt="Issues" />
  </a>
</p>

## Note

We should always sanitize user input values on the server. Do sanitize with Vue only for necessary cases (e.g markdown preview).

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

``` js
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

This plugin is dependent on [sanitize-html](https://github.com/punkave/sanitize-html). For details, see here https://github.com/punkave/sanitize-html#readme.

### `this.$sanitize(dirty[, options])`

#### dirty

* Type: `String`
* Required: `true`

#### options

* Type: `Object`

If you don't pass an options, the default options will be used.

#### `VSanitize.defaults`

Return `sanitizeHtml.defaults`.

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
