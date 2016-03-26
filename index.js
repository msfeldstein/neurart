var R = require('recurrentjs')
require('./whammy')
require('./ccapture')
// window.R = R
// require('./recurrent')
var height = 360
var width = 360

var networkSize = 16
var nHidden = 8
var nOut = 3

var mu = 0.5
var std = 1.4

var dimensions = 3

var G = new R.Graph(false)

var initModel = function() {
  var model = []
  model.w_in = new R.RandMat(networkSize, dimensions + 1, mu, std)
  
  for (var i = 0; i < nHidden; i++) {
    model['w_'+i] = new R.RandMat(networkSize, networkSize, mu, std)
  }
  model.w_out = new R.RandMat(nOut, networkSize, mu, std)
  
  return model
}

var model = initModel()
console.log(model)

var forwardNetwork = function(G, model, x_, y_, z_) {
  var x = new R.Mat(dimensions  + 1, 1)
  x.set(0, 0, x_)
  x.set(1, 0, y_)
  x.set(2, 0, z_)
  x.set(3, 0, 1.0)
  
  var out = G.tanh(G.mul(model.w_in, x))
  for (var i = 0; i < nHidden; i++) {
    out = G.tanh(G.mul(model['w_'+i], out))
  }
  out = G.sigmoid(G.mul(model.w_out, out))
  return out
}

function getColorAt(x, y, z) {
  var out = forwardNetwork(G, model, x, y, z)
  var r = out.w[0] * 255.0
  var g = out.w[1] * 255.0
  var b = out.w[2] * 255.0
  return [r, g, b]
}

var canvas = document.createElement('canvas')
canvas.width = width
canvas.height = height
document.body.appendChild(canvas)

var capturer = new CCapture({format: 'webm'})
capturer.start()
var ctx = canvas.getContext('2d')
var frame = 0
function draw() {
  var z = frame / 200.0
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var rgb = getColorAt(x / width, y / height, z)
      var pix = ctx.createImageData(1, 1)
      var d = pix.data
      d[0] = rgb[0]
      d[1] = rgb[1]
      d[2] = rgb[2]
      d[3] = 255
      ctx.putImageData(pix, x, y)
    }
  }
  frame++

  capturer.capture(canvas)
  if (frame % 50 == 0) {
    capturer.save()
  }
  requestAnimationFrame(draw)
}

draw()
