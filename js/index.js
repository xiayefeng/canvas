!(function(win, doc) {
  var canvas = doc.getElementById('my-canvas')
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    var r = 250
    const PI = Math.PI

    ctx.moveTo(10, 220)
    ctx.lineTo(180, 210)
    ctx.lineTo(250, 10)
    ctx.lineTo(310, 210)
    ctx.lineTo(490, 210)
    ctx.lineTo(330, 310)
    ctx.lineTo(390, 480)
    ctx.lineTo(250, 350)
    ctx.lineTo(110, 480)
    ctx.lineTo(180, 290)
    ctx.lineTo(10, 220)

    ctx.fillStyle = '#e4ef00'
    ctx.fill()
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 3
    ctx.stroke()
    
  }
  function num(num){
    return PI * (num / 180)
  }
})(window, document)
