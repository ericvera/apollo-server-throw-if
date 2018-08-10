const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (id, objectName) => {
  if (!checkIf.isFirestoreId(id)) {
    throw new UserInputError(`Invalid ID '${id}' for '${objectName}' received.`)
  }
}
