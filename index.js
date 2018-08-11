const invalidDateInMs = require('./invalidDateInMs')
const invalidFirestoreId = require('./invalidFirestoreId')
const invalidShortDate = require('./invalidShortDate')
const invalidTrimmedNonEmptyString = require('./invalidTrimmedNonEmptyString')
const invalidUpdateObject = require('./invalidUpdateObject')
const objectDoesNotContain = require('./objectDoesNotContain')
const objectDoesNotExistOrIsDeleted = require('./objectDoesNotExistOrIsDeleted')
const objectExist = require('./objectExist')
const objectUpdatesHaveUnchangedProperties = require('./objectUpdatesHaveUnchangedProperties')
const outOfSync = require('./outOfSync')

module.exports = {
  invalidDateInMs,
  invalidFirestoreId,
  invalidShortDate,
  invalidTrimmedNonEmptyString,
  invalidUpdateObject,
  objectDoesNotContain,
  objectDoesNotExistOrIsDeleted,
  objectExist,
  objectUpdatesHaveUnchangedProperties,
  outOfSync
}
