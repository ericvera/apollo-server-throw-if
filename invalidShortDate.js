const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (value, argumentName) => {
  if (!checkIf.isShortDate(value)) {
    throw new UserInputError(
      `'${argumentName}' is '${value}'. '${argumentName}' is expected to be a string representing a Date with the form YYYY-MM-DD.`
    )
  }
}
