const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (object, objectName) => {
  if (checkIf.isNonDeletedObject(object)) {
    throw new UserInputError(`'${objectName}' exist and is not delted.`)
  }
}
