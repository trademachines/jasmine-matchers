# @trademachines/jasmine-utils

[Introduction](#introduction) | [Matchers](#matchers) | [Utilities](#utilities) | [Integration](#integration)

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

## Utilities

Following convenience functions are added for [Jasmine](http://jasmine.github.io/)

### createSpyObjFrom

This one makes mocking objects slightly more convenient. Instead of `jasmine.createSpyObj('name', ['method'])` you
can do `jasmine.createSpyObjFrom(Class)`. It tries to infer the methods from the prototype and is able to account
for inheritance as well.

## Integration

### Node.js and TypeScript

Update your Jasmine boostrap file:

```js
require('@trademachines/jasmine-utils');
```

Also, don't forget to add them to your list of types in `tsconfig.json` like so:

```json
{
  "compilerOptions": {
    "types": [
      "node",
      "jasmine",
      "@trademachines/jasmine-utils"
    ]
  }
}
```
