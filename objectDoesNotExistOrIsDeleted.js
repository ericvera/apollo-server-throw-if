const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (object, objectDescription) => {
  if (!checkIf.isNonDeletedObject(object)) {
    throw new UserInputError(`${objectDescription} not found.`)
  }
}
