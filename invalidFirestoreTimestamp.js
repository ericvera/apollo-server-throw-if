const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (timestamp, objectName) => {
  if (!checkIf.isFirestoreTimestamp(timestamp)) {
    throw new UserInputError(
      `Invalid Timestamp '${timestamp}' for '${objectName}' received.`
    )
  }
}
