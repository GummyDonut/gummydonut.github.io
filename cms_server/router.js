

let blogger = require('./lib/blog')

module.exports =  {

  /**
  * Pass over the app and initialize the routes
  */
  init(App) {

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
    
    this.App.post('/blogs/create', (req, res) =>{
      blogger.createBlogEntry(req, res)
    })

    this.App.post('/blogs/modify/:blogid', (req, res) =>{
    })
  }
}
