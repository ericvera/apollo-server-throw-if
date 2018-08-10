# apollo-server-throw-if

[![github license](https://img.shields.io/github/license/ericvera/apollo-server-throw-if.svg?style=flat-square)](https://github.com/ericvera/apollo-server-throw-if/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/apollo-server-throw-if.svg?style=flat-square)](https://npmjs.org/package/apollo-server-throw-if)

A library that throws Apollo Server exceptions when validations fail.

# Usage

## Install module

`npm install --save apollo-server-throw-if`

## Sample

```javascript
const throwIf = require('apollo-server-throw-if')

// [your code here...]

throwIf.invalidDateInMs('2043-01-01', 'lastUpdate')
```

# Functions

| Functions                                              | Description                                                                                                                                                       |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `objectDoesNotContain(object, objectName, properties)` | Throws if any of the property names listed in `properties` are not in `object`                                                                                    |
| `invalidDateInMs(value, argumentName)`                 | Throws if:</br>- value is not a number</br>- value can not be parsed by `new Date(value)`                                                                         |
| `invalidFirestoreId(id, objectName)`                   | Throws if:</br>- not a valid Firestore id (20 characters a-z, A-Z, and 0-9)                                                                                       |
| `invalidShortDate(value, argumentName)`                | Expects a date with the format (YYYY-MM-DD). Throws if:</br>- value is not a string with exactly 10 characters</br>- value can not be parsed by `new Date(value)` |
| `invalidTrimmedNonEmptyString(value, argumentName)`    | Throws if:</br>- value is not a string</br>- value is not trimmed</br>- string is empty                                                                           |
