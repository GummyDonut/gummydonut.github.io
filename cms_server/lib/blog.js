const FS = require('fs')
module.exports = {

  /**
  * Grabs the blog.json file specifying high level information to display
  * about the blogs
  * @param req - Express request object
  * @param res - Express response object
  */
  getBlogs(req, res) {

    // grab the location where we store high level information
    let content = FS.readFileSync('../src/src/assets/blog/blog.json')  
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
  */
  getBlogEntry(req, res){
    let parameters = req.params 

    // sanity check
    if (!parameters) {
      res.json({
        'error': {
          'message': 'no parameters to get blogs'
        }
      })
      return
    } 
 
    let blogID = parameters.blogid

    let content = ''
    try {
      content = FS.readFileSync('../src/src/assets/blog/' + blogID + '.json')  
    } catch(err) {
      res.json({
        'error': {
          'message': 'No blog entry by the name of: ' + blogIDi + '.json'
        } 
      });
      return 
    }

    let json = JSON.parse(content) 
    res.json(json)


  },

}
