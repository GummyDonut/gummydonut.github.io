// Obtain server module
const EXPRESS = require('express')
const APP = EXPRESS()
const CORS = require('cors')
let ROUTER = require('./router')


// assign the port
const PORT = 3000

// allow for cross origin support
APP.use(CORS())

ROUTER.init(APP)

// start the application
APP.listen(PORT, () => {
    console.log(`Started app listening on port ${PORT}!`)
})
