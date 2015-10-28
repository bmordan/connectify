var Nes = require('nes/client')

var client = new Nes.Client('ws://localhost:3000')

client.connect(function (err) {
  if (err) return console.error(err)

  client.request('connected', function (err, payload) {
    if (err) return console.error(err)
    console.log(payload)
  })

})