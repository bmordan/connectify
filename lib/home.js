module.exports = () => {
  return {
    path: '/',
    method: 'GET',
    handler: (req, res) => res.file('./dist/index.html')
  }
}
