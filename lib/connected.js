module.exports = (server) => {
  return {
    path: '/connected',
    method: 'GET',
    config: {
      id: 'connected',
      handler: (req, reply) => reply('Hello from ' + server.info.uri)
    }
  }
}
