module.exports = {

  /**
   * Validate the content of the json body
   * @param {JSON} body JSON containing the body of the blog creation route
   * @returns {Array of strings} each string representing a possible error, empty array
   * represents no erros
   */
  validateBlogCreation(body) {

    let errors = []

    // sanity check, make sure that the content is up to date
    if (!body.title) {
      errors.push('Missing blog title')
    }

    if (!body.date) {
      errors.push('Missing blog date')
    }

    if (!body.text) {
      errors.push('Missing blog content')
    }

    if (!body.thumbnail) {
      errors.push('Missing blog thumbnail')
    }
    
    return errors
  }
}
