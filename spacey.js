document.body.onkeydown = function(e) {
  if (e.keyCode == 32) { // space
    return e.ctrlKey ? this.reset() : this.toggle()
  }
}.bind({
  toggle: function() {
    this.running = this.running ? this.stop() : this.start()
    return false
  },
  stop: function() {
    clearInterval(this.timer)
    this.render(this.off)
    return false
  },
  start: function() {
    this.inited = this.inited ? true : this.init()
    this.timer = setInterval(this.next.bind(this), this.epoc)
    this.render(this.on)
    return true
  },
  reset: function() {
    this.render(this.tick = 0)
    return false
  },
  next: function() {
    this.render(++this.tick)
  },
  // dom interaction
  render: function(s) {
    switch(typeof s) {
      case 'number':
        this.ui.innerHTML = new Date(s * this.epoc).toISOString().substr(11, 8)
        break;
      case 'string':
        this.ui.style.borderColor = s
        break;
    }
  },
  init: function () {
    this.ui = document.createElement('div')
    this.ui.style.cssText = `
      position: fixed;
      top: 0;
      border: 2px solid ${this.off};
      background: ${this.shade}`
    this.reset()
    return document.body.appendChild(this.ui)
  },
  running: false,
  inited: false,
  epoc: 1000,
  // styles
  shade: 'white',
  on: 'blue',
  off: 'transparent'
})