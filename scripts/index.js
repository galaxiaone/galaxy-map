'use strict'
const PlanetInfo = require('./PlanetInfo.js')

window.addEventListener('load', function () {
  console.log('script is loading ok')

  const infoBox = document.getElementById('info-box')
  const sun = document.getElementById('sun')

  sun.addEventListener('click', () => {
    console.log('click listener working')
    const sunInfo = new PlanetInfo({ address: '0x0', name: 'sun', id: 'sun' })
    infoBox.innerHTML = sunInfo.render()
  })
})
