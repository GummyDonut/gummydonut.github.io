// Obtain server module
const EXPRESS = require('express')
const APP = EXPRESS()
const CORS = require('cors')

// assign the port
const PORT = 3000

// allow for cross origin support
APP.use(CORS())

// set up the routes
APP.get('/', (req, res) => {
    res.send('Hello World!')
})


// start the application
APP.listen(PORT, () => {
    console.log(`Started app listening on port ${PORT}!`)
})