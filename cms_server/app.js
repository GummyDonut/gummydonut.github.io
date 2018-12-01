// Obtain server module
const EXPRESS = require('express')
const APP = EXPRESS()
const CORS = require('cors')
let ROUTER = require('./router')
const BODYPARSER = require('body-parser')

// assign the port
const PORT = 3000

// allow for cross origin support
APP.use(CORS())
APP.use(BODYPARSER.urlencoded({ extended: true }))
APP.use(BODYPARSER.json())

ROUTER.init(APP)

// start the application
APP.listen(PORT, () => {
  console.log(`Started app listening on port ${PORT}!`)
})
