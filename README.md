# @trademachines/jasmine-matchers

[Introduction](#introduction) | [Matchers](#matchers) | [Integration](#integration)

## Introduction

This library provide a set of matchers for [Jasmine](http://jasmine.github.io/) to make life
easier and code more readable 👍

## Matchers

Following matchers are added for [joi](https://github.com/hapijs/joi):

```js
expect(...).toBeJoiError();
expect(...).toBeJoiErrorWith({ path: '', type: '' });
```

Following matchers are added for [monet.js](https://monet.github.io/monet.js/):

```js
expect(...).toBeEither();
expect(...).toBeLeftEither();
expect(...).toBeLeftEitherWith('something');
expect(...).toBeMaybe();
expect(...).toBeNone();
expect(...).toBeRightEither();
expect(...).toBeRightEitherWith('something');
expect(...).toBeSome();
expect(...).toBeSomeWith();
```

## Integration

### Node.js and TypeScript

To be ready for use just add `require('@trademachines/jasmine-matchers');` to your Jasmine bootstrap file.
Also, don't forget to add them to your list of types in `tsconfig.json` like so:

```json
{
  "compilerOptions": {
    "types": [
      "node",
      "jasmine",
      "@trademachines/jasmine-matchers"
    ]
  }
}
```
