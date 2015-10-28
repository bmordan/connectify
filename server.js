const Hapi = require('hapi')
const Nes = require('nes')
const server = new Hapi.Server()
const Routes = require('./lib/routes')(server)
const inert = require('inert')

server.connection({
  host: 'localhost',
  port: 3000
})
server.register([Nes, inert], (err) => {
  if (err) throw new Error(err)
  server.route(Routes)
  server.start((err) => {
    if (err) throw new Error(err)
    startMessage()
  })
})

const startMessage = () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~ Hapi Server ~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  Object.keys(server.info).map((key) => console.log(`${key} : ${server.info[key]}`))
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}
