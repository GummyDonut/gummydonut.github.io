const FS = require('fs')
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
  getBlogs(req, res) {

    // grab the location where we store high level information
    let content = FS.readFileSync( BLOGCONTENTPREFIX + 'blog.json')  
    let json = null

    // try and catch for error handling
    try {
      json = JSON.parse(content)
    } catch(err) {
      console.log(err)
    }

    res.json(json)
  },


  /**
  * Grabs the individual blogEntry and its content
  * Route: /blogs/{blogID}
  * Type: GET Request
  */
  getBlogEntry(req, res){
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
    } catch(err) {
      res.json(ERROR.toError('No blog entry by the name of: ' + blogID));
      return 
    }

    let json = JSON.parse(content) 
    res.json(json)
  },

  /**
   * Route call to create a new blog entry
   * Route: /blogs/create
   * Type: POST
   */
  createBlogEntry(req, res){
    
    // grab the body of the request object
    let body = req.body

    // sanity check
    if (body === undefined){
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

    let success = this._blog(body)
    if (success && typeof(success) === 'boolean') {
      res.json({'status': 'sent'})
    } else if (success && typeof(success) === 'string'){
      res.json(ERROR.toError(success))
    } else {
      res.json(ERROR.toError('Blog posting failed, unknown error'))
    }

    return
  },

  /**
   * Modify an existing blog entry
   * Route: /blogs/modify:blogid
   * Type: POST
   */
  modifyBlogEntry(req, res){
    let body = req.body 

    // sanity check
    if (body === undefined){
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


    let success = this._blog(body, req.params.blogid)
    if (success && typeof(success) === 'boolean') {
      res.json({'status': 'sent'})
    } else if (success && typeof(success) === 'string'){
      res.json(ERROR.toError(success))
    } else {
      res.json(ERROR.toError('Blog posting failed, unknown error'))
    }

    return
  },

  /**
   * Function for modifying/creating a blog post file
   * @param {JSON} body content of the blog post follows this structure
   * {
      "title": "It's been 2 years...testing",
      "date": "September, 30, 2018",
      "text": " text",
      "thumbnail": "img/thumbnail/hammer.png",
      "link": "",
      "linkText": ""
     }
     @param {String} blogID Optional id, if specified will modify an existing blog
   * @returns {Bool|String} True for success, error message string upon failure
   */
  _blog(body, blogID){
    
    // sanity check 
    if (!body) {
      return 'No body content defined'
    }

    // check if there is blogID specified if so look for existing file
    if (blogID) {
      let exists = FS.existsSync(BLOGCONTENTPREFIX + blogID + '.json')  
      if (!exists) {
        return 'Blog file does not exist at: ' + BLOGCONTENTPREFIX + blogID + '.json'
      }

      try {
        FS.writeFileSync(BLOGCONTENTPREFIX + blogID + '.json', JSON.stringify(body, null, 2))  
        return true
      } catch(err){
        return err.toString()
      }
    } 
    
    // simply write new file
    else {
      try {
        let counterIndex = JSON.parse(FS.readFileSync(BLOGCONTENTPREFIX + 'counter.json')).index
        let newIndex = counterIndex + 1 
        FS.writeFileSync(BLOGCONTENTPREFIX + 'blogEntry' + newIndex + '.json', JSON.stringify(body, null, 2), { flag: 'wx' })  

        // increase the counter
        FS.writeFileSync(BLOGCONTENTPREFIX + 'counter.json', JSON.stringify({index: newIndex}, null, 2))  
        return true
      } catch(err){
        return err.toString()
      }
    }
  }
}
