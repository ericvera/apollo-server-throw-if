const emptyFirestoreDocumentSnapshot = require('./emptyFirestoreDocumentSnapshot')
const invalidDateInMs = require('./invalidDateInMs')
const invalidFirestoreId = require('./invalidFirestoreId')
const invalidFirestoreTimestamp = require('./invalidFirestoreTimestamp')
const invalidShortDate = require('./invalidShortDate')
const invalidTrimmedNonEmptyString = require('./invalidTrimmedNonEmptyString')
const invalidUpdateObject = require('./invalidUpdateObject')
const nonEmptyFirestoreQuerySnapshot = require('./nonEmptyFirestoreQuerySnapshot')
const objectDoesNotContain = require('./objectDoesNotContain')
const objectDoesNotExistOrIsDeleted = require('./objectDoesNotExistOrIsDeleted')
const objectExist = require('./objectExist')
const objectUpdatesHaveUnchangedProperties = require('./objectUpdatesHaveUnchangedProperties')
const outOfSync = require('./outOfSync')
const outOfSyncFirestoreTimestamps = require('./outOfSyncFirestoreTimestamps')

module.exports = {
  emptyFirestoreDocumentSnapshot,
  invalidDateInMs,
  invalidFirestoreId,
  invalidFirestoreTimestamp,
  invalidShortDate,
  invalidTrimmedNonEmptyString,
  invalidUpdateObject,
  nonEmptyFirestoreQuerySnapshot,
  objectDoesNotContain,
  objectDoesNotExistOrIsDeleted,
  objectExist,
  objectUpdatesHaveUnchangedProperties,
  outOfSync,
  outOfSyncFirestoreTimestamps
}
