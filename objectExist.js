const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (object, attributeName, attributeValue) => {
  if (checkIf.isNonDeletedObject(object)) {
    throw new UserInputError(`'${attributeName}' '${attributeValue}' exists.`)
  }
}
