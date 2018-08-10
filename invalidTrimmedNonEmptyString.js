import checkIf from 'check-if'
import { UserInputError } from 'apollo-server'

module.exports = (value, argumentName) => {
  if (!checkIf.isTrimmedNonEmptyString(value)) {
    throw new UserInputError(
      `'${argumentName}' is '${value}'. '${argumentName}' is required and cannot start or end in spaces.`
    )
  }
}
