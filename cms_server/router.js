

module.exports =  {

  /**
  * Pass over the app and initialize the routes
  */
  init(App) {

    // Keep track of App
    this.App = App

    // set up the routes
    this.App.get('/', (req, res) => {
        res.send('Hello World!')
    })

  }
}
