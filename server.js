const Hapi = require('Hapi')
const Routes = require('./lib/routes')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 3000
})
server.route(Routes)
server.start(function (err) {
  if (err) console.error(err)
  console.log('Running Hapi on port ' + server.info.uri)
})
