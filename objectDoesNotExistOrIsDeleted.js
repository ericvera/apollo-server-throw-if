const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (object, objectName) => {
  if (!checkIf.isNonDeletedObject(object)) {
    throw new UserInputError(
      `'${objectName}' either does not exist or has been deleted.`
    )
  }
}
