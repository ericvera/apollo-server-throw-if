const checkIf = require('check-if')
const { UserInputError } = require('apollo-server')

module.exports = (object, objectName, validator) => {
  // Should be an object and not empty
  if (!checkIf.isNonEmptyObject(object)) {
    throw new UserInputError(
      `${objectName} update object is required and cannot be empty.`
    )
  }

  // Iterate through all the keys
  // - if they are not found in validator, throw error about unexpected key
  // - if they are found validate
  for (let propertyName in object) {
    if (!validator[propertyName]) {
      throw new UserInputError(`Property '${propertyName}' is invalid.`)
    }

    // validator will throw if the validator fails
    validator[propertyName](object[propertyName], propertyName)
  }
}
