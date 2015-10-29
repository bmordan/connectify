var Nes = require('nes/client')

var client = new Nes.Client('ws://localhost:3000')

client.connect(function (err) {
  if (err) return console.error(err)

  var opts = {
    path: '/connect',
    method: 'POST',
    headers: {},
    payload: {x:window.innerWidth/2, y:window.innerHeight/2}
  }

  document.onmousemove = function (e) {
    opts.payload.x = e.pageX
    opts.payload.y = e.pageY
    client.request(opts, function (err, res) {if (err) return console.error(err)})
  }

})
