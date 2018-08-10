const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (object, objectName, properties) => {
  if (!checkIf.containsProperties(object, properties)) {
    throw new UserInputError(
      `'${objectName}' expects to have all of the following properties '${properties.toString()}'.`
    )
  }
}
