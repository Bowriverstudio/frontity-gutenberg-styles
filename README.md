# `frontity-gutenberg-styles`

This package that imports the gutenberg css themes/styles globally.

The version matches Gutenberg's version.

Styles are copied from:

```
wp-content/plugins/gutenberg/build/block-library/style.css
wp-content/plugins/gutenberg/build/block-library/theme.css
```

## Install

```bash
npm install frontity-gutenberg-styles
```

## Frontity Settings

Update `frontity.settings.js`

```js
export default {
  packages: ["frontity-gutenberg-styles"],
};
```

## References

@link https://bowriverstudio.com/style-gutenberg-blocks-in-frontity
@link https://community.frontity.org/t/gutenberg-package/480/24
