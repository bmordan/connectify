module.exports = () => {
  return {
    path: '/connect',
    method: 'POST',
    config: {
      id: 'connect',
      handler: (req, reply) => reply(req.payload)
    }
  }
}
