module.exports = () => {
  return {
    path: '/bundle.js',
    method: 'GET',
    handler: (req, res) => res.file('./dist/bundle.js')
  }
}