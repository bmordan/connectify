const Routes = (server) => {
  return [
    require('./home.js')(),
    require('./bundle.js')(),
    require('./connected.js')(server)
  ]
}
module.exports = Routes
