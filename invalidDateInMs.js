const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (value, argumentName) => {
  if (!checkIf.isDateInMs(value)) {
    throw new UserInputError(
      `'${argumentName}' is '${value}'. '${argumentName}' is expected to be a number representing a Date.`
    )
  }
}
