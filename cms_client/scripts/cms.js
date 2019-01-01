var spawn = require('child_process').spawn

// Notice how your arguments are in an array of strings
// running on windows is slightly different
// Run front end client
let npmType = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
var childClient = spawn(npmType, [
  'run',
  'dev'
])
childClient.stdout.on('data', function (data) {
  process.stdout.write(data)
})

// Spawn back-end code
var childServer = spawn('node', [
  '../cms_server/app.js'
])
childServer.stdout.on('data', function (data) {
  process.stdout.write(data)
})
