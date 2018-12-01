
let blogger = require('./lib/blog')
let multer = require('multer')
let upload = multer()
module.exports = {

  /**
  * Pass over the app and initialize the routes
  */
  init (App) {
    // Keep track of App
    this.App = App

    // set up the route for getting all the json files
    this.App.get('/blogs', (req, res) => {
      blogger.getBlogs(req, res)
    })

    // set up the route for getting all the json files
    this.App.get('/blogs/:blogid', (req, res) => {
      blogger.getBlogEntry(req, res)
    })

    // route for creating a new blog
    this.App.post('/blogs/create', upload.single('newThumbnail'), (req, res) => {
      blogger.createBlogEntry(req, res)
    })

    // route for modifying an existing blog
    this.App.post('/blogs/modify/:blogid', upload.single('newThumbnail'), (req, res) => {
      blogger.modifyBlogEntry(req, res)
    })
  }
}
