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

| Functions                                                                                | Description                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invalidDateInMs(value, argumentName)`                                                   | Throws if:</br>- value is not a number</br>- value can not be parsed by `new Date(value)`                                                                                                                       |
| `invalidFirestoreId(id, objectName)`                                                     | Throws if:</br>- not a valid Firestore id (20 characters a-z, A-Z, and 0-9)                                                                                                                                     |
| `invalidShortDate(value, argumentName)`                                                  | Expects a date with the format (YYYY-MM-DD). Throws if:</br>- value is not a string with exactly 10 characters</br>- value can not be parsed by `new Date(value)`                                               |
| `invalidTrimmedNonEmptyString(value, argumentName)`                                      | Throws if:</br>- value is not a string</br>- value is not trimmed</br>- string is empty                                                                                                                         |
| `objectDoesNotContain(object, objectName, properties)`                                   | Throws if any of the property names listed in `properties` are not in `object`                                                                                                                                  |
| `objectDoesNotExistOrIsDeleted(object, objectDescription)`                               | Throws is the object does not exist of `object.deleted` is `true`                                                                                                                                               |
| `objectUpdatesHaveUnchangedProperties(objectUpdates, objectUpdatesName, originalObject)` | Throws if any of the propertes in the objectUpdates has the same value as in `originalObject`. Change validation uses `==` as opposed to `===` and only works for objects that does not contain nested objects. |
| `outOfSync(localLastUpdated, serverLastUpdated)`                                         | Throws if:</br>- any of the provided dates is not a valid date</br>- dates are not the same                                                                                                                     |
