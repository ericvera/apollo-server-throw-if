const checkIf = require('check-if')
const { ApolloError } = require('apollo-server')

export default (localLastUpdated, serverLastUpdated) => {
  if (!checkIf.areInSync(localLastUpdated, serverLastUpdated)) {
    const localUpdated = Date.UTC(localLastUpdated)
    const serverUpdated = Date.UTC(serverLastUpdated)

    throw new ApolloError(
      `The item in the server was last updated on '${serverUpdated.toISOString()}' while the item received was updated on '${localUpdated.toISOString()}'.`,
      'UNRESOLVED_CONFLICT'
    )
  }
}
