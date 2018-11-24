var spawn = require('child_process').spawn
// Notice how your arguments are in an array of strings
var childClient = spawn('npm', [
  'run',
  'dev'
])
childClient.stdout.on('data', function (data) {
  process.stdout.write(data)
})

var childServer = spawn('node', [
  '../cms_server/app.js'
])

childServer.stdout.on('data', function (data) {
  process.stdout.write(data)
})
