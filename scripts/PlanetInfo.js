class PlanetInfo {

  constructor (props) {
    this.id = props.id
    this.address = props.address
    this.name = props.name
  }

  render () {
    return `<div>
              <h1>${this.name}</h1>
              <br />
              <h3>By ${this.address}</h3>
            </div>`
  }
}
module.exports = PlanetInfo
