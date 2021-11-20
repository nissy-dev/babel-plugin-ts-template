This is template repository for babel plugin development with TypeScript.

1. Create repository based on this template
2. Change plugin name from babel-plugin-ts-template to your own
3. Modify TODO comments
4. Add NPM_TOKEN to repository secrets

---

# babel-plugin-ts-template

![release](https://github.com/nissy-dev/babel-plugin-ts-template/actions/workflows/release.yml/badge.svg)
[![License: MIT](https://img.shields.io/github/license/nissy-dev/babel-plugin-ts-template.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/babel-plugin-ts-template.svg)](https://badge.fury.io/js/babel-plugin-ts-template)

TODO: write some description

Input:

```ts
var a = "test";
```

Output:

```ts
const a = "test";
```

## Install

```bash
$ npm install --save-dev babel-plugin-ts-template
```

and add it to your `.babelrc`.

```json
{
  "plugins": [
    [
      "ts-template",
      {
        "option1": true
      }
    ]
  ]
}
```

## Options

### `option1`

boolean, defaults to false

TODO: write some description

## Contributing

Welcome your contribution!

See also [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md).

## Setup

```
$ git clone git@github.com:nissy-dev/babel-plugin-ts-template.git
$ cd babel-plugin-ts-template
$ npm ci
```

## Development Tools

```
// run tsc, eslint, prettier
$ npm run lint

// run test
$ npm run test
```
