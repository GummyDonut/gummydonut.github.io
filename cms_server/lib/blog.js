// Format for blog entry
// {
//  "id": "blogEntry0",
//  "title":"Beginning to something I hope",
//  "thumbnail":"img/baduk.jpeg",
//  "date":"Sept 02,2014",
//  "text":"Text Content"
// }
const FS = require('fs')
const PATH = require('path')
const ERROR = require('./error')
const VALIDATION = require('./validation')
const BLOGCONTENTPREFIX = '../src/src/assets/blog/'
module.exports = {

  /**
  * Grabs the blog.json file specifying high level information to display
  * about the blogs
  * Route: /blogs
  * Type: GET Request
  * @param req - Express request object
  * @param res - Express response object
  */
  getBlogs (req, res) {
    // grab the location where we store high level information
    let content = FS.readFileSync(BLOGCONTENTPREFIX + 'blog.json')
    let json = null

    // try and catch for error handling
    try {
      json = JSON.parse(content)
    } catch (err) {
      console.log(err)
    }

    res.json(json)
  },

  /**
  * Grabs the individual blogEntry and its content
  * Route: /blogs/{blogID}
  * Type: GET Request
  */
  getBlogEntry (req, res) {
    let parameters = req.params

    // sanity check
    if (!parameters) {
      res.json(ERROR.toError('No blog entry provided'))
      return
    }

    let blogID = parameters.blogid

    let content = ''
    try {
      content = FS.readFileSync('../src/src/assets/blog/' + blogID + '.json')
      let contentJSON = JSON.parse(content)
      let responseJSON = {
        'content': contentJSON
      }
      // After reading the json content send over the thumbnail content as well
      if (contentJSON.thumbnail) {
        let thumbnailBit = FS.readFileSync('../src/static/' + contentJSON.thumbnail)
        responseJSON.thumbnailData = Buffer.from(thumbnailBit).toString('base64')
      }

      res.json(responseJSON)
    } catch (err) {
      res.json(ERROR.toError('Error retrieving: ' + blogID + ': ' + err))
    }
  },

  /**
   * Route call to create a new blog entry
   * Route: /blogs/create
   * Type: POST
   */
  createBlogEntry (req, res) {
    // grab the body of the request object
    let body = req.body

    console.log(req.body)
    // sanity check
    if (body === undefined) {
      res.json(ERROR.toError('No body present within blog entry post'))
      return
    }

    // validate the content of the
    let errors = VALIDATION.validateBlogCreation(body)

    // old link text will not be used
    // get errors
    if (errors.length > 0) {
      res.json(ERROR.toError(errors))
      return
    }

    // also work on site responsiveness
    let success = this._blog(req)
    if (success && typeof (success) === 'boolean') {
      res.json({'status': 'sent'})
    } else if (success && typeof (success) === 'string') {
      res.json(ERROR.toError(success))
    } else {
      res.json(ERROR.toError('Blog posting failed, unknown error'))
    }
  },

  /**
   * Modify an existing blog entry
   * Route: /blogs/modify:blogid
   * Type: POST
   */
  modifyBlogEntry (req, res) {
    let body = req.body

    console.log(req.file)
    console.log(JSON.stringify(body, null, 4))

    // sanity check
    if (body === undefined) {
      res.json(ERROR.toError('No body present within blog entry post'))
      return
    }

    // validate the content of the
    let errors = VALIDATION.validateBlogCreation(body)

    // old link text will not be used
    // get errors
    if (errors.length > 0) {
      res.json(ERROR.toError(errors))
      return
    }

    errors = [this._blog(req)]

    // loop through errors, if there is string present return error
    // if all true return fine
    let errorMessages = []
    errors.forEach((error) => {
      if (error && typeof (error) === 'string') {
        errorMessages.push(error)
      }
    })

    if (errorMessages.length > 0) {
      res.json(ERROR.toError(errorMessages))
      return
    }

    res.json({'status': 'ok'})
  },

  /**
   * Store the file in the
   * @param {FILE} file
   */
  _storeThumbnail (file) {
    try {
      FS.writeFileSync(PATH.resolve(__dirname, '../../src/static/img/thumbnail/', file.originalname),
        file.buffer)
      return true
    } catch (e) {
      console.log(e)
      return 'Could not store thumbnail'
    }
  },

  /**
   * Function for modifying/creating a blog post file
   * @param {JSON} req, request object
   * we are interested in the body which is the content of the blog post follows this structure
   * {
      "id": "blogEntry#"
      "title": "It's been 2 years...testing",
      "date": "September, 30, 2018",
      "text": " text",
      "thumbnail": "img/thumbnail/hammer.png",
      "link": "",
      "linkText": ""
     }
   * @returns {Array of Strings/Bool} Strings represent error, true success, false otherwise
   */
  _blog (req) {
    let body = req.body
    let blogID = req.params.blogid

    // sanity check
    if (!body) {
      return 'No body content defined'
    }

    // only if there is a file
    if (req.file) {
      let thumbnailError = this._storeThumbnail(req.file)
      if (thumbnailError && typeof (thumbnailError) === 'string') {
        return thumbnailError
      }
    }

    // check if there is blogID specified if so look for existing file
    if (blogID) {
      let exists = FS.existsSync(BLOGCONTENTPREFIX + blogID + '.json')
      if (!exists) {
        return 'Blog file does not exist at: ' + BLOGCONTENTPREFIX + blogID + '.json'
      }

      // insert id into body and remove newThumbnail field
      body.id = blogID
      delete body.newThumbnail

      try {
        FS.writeFileSync(BLOGCONTENTPREFIX + blogID + '.json', JSON.stringify(body, null, 2))
        // update snippet
        this._snippet(body, true)
        return true
      } catch (err) {
        return err.toString()
      }
    } else {
      // simply write new file
      try {
        let counterIndex = JSON.parse(FS.readFileSync(BLOGCONTENTPREFIX + 'counter.json')).index
        let newIndex = counterIndex + 1
        body.id = 'blogEntry' + newIndex
        FS.writeFileSync(BLOGCONTENTPREFIX + 'blogEntry' + newIndex + '.json', JSON.stringify(body, null, 2), { flag: 'wx' })

        // update snippet
        this._snippet(body)

        // increase the counter
        FS.writeFileSync(BLOGCONTENTPREFIX + 'counter.json', JSON.stringify({index: newIndex}, null, 2))
        return true
      } catch (err) {
        return err.toString()
      }
    }
  },

  /**
   * Create the snippet in blog.json
   * @param {JSON} body
   * {
      "id": "blogEntry#"
      "title": "It's been 2 years...testing",
      "date": "September, 30, 2018",
      "text": " text",
      "thumbnail": "img/thumbnail/hammer.png",
     }
   */
  _snippet (body, existing) {
    let snippetArray = JSON.parse(FS.readFileSync(BLOGCONTENTPREFIX + 'blog.json'))

    if (!existing) {
      let snippetJSON = {
        'date': body.date,
        'snippet': body.text.substring(0, 150) + '...',
        'thumbnail': body.thumbnail,
        'title': body.title,
        'id': body.id,
        'tags': body.tags
      }
      snippetArray.push(snippetJSON)
    } else {
      // Loop through all of snippets looking for matching id
      let snippetToEdit = snippetArray.find((snippet) => {
        return snippet.id === body.id
      })
      snippetToEdit.date = body.date
      snippetToEdit.snippet = body.text.substring(0, 150) + '...'
      snippetToEdit.thumbnail = body.thumbnail
      snippetToEdit.title = body.title
      snippetToEdit.tags = body.tags
    }
    FS.writeFileSync(BLOGCONTENTPREFIX + 'blog.json', JSON.stringify(snippetArray, null, 2))
  }
}
