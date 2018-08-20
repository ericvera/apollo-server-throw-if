const checkIf = require('check-if')
const { ApolloError } = require('apollo-server')

module.exports = (localLastUpdated, serverLastUpdated) => {
  if (
    !checkIf.areInSyncFirestoreTimestamps(localLastUpdated, serverLastUpdated)
  ) {
    const localUpdated = Date.UTC(localLastUpdated.toMillis())
    const serverUpdated = Date.UTC(serverLastUpdated.toMillis())

    throw new ApolloError(
      `The item in the server was last updated on '${serverUpdated.toISOString()}' while the item received was updated on '${localUpdated.toISOString()}'.`,
      'OUT_OF_SYNC'
    )
  }
}
