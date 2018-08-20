const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (object, attributeName, attributeValue) => {
  if (checkIf.isNonEmptyFirestoreQuerySnapshot(object)) {
    throw new UserInputError(
      `Item with '${attributeName}' = '${attributeValue}' exists.`
    )
  }
}
