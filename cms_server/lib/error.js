module.exports = {

  /**
     * Generate the json is used in error response
     * @param {String/Array of Strings} messages - Contains all the messsages we are gonna generate
     * in the response
     */
  toError (messsages) {
    // sanity check
    if (!messsages) {
      return {'error': {'message': 'Error has occurred, no error message provided'}}
    }

    // structure to return errors
    if (typeof (messsages) === 'string') {
      return {'error': {'message': messsages}}
    } else if (messsages instanceof Array) {
      return {'error': {'message': messsages}}
    } else {
      return {'error': {'message': 'Error has occurred, message type incorrect'}}
    }
  }
}
