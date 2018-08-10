const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (objectUpdates, objectUpdatesName, originalObject) => {
  if (!checkIf.containsUpdatedProperties(objectUpdates, originalObject)) {
    throw new UserInputError(
      `'${objectUpdatesName}' contains properties that have the same value as the original. All updates must have changed values.`
    )
  }
}
