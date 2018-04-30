// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

class AddLoc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newLoc: ''
    }

    this.updateNewLoc = this.updateNewLoc.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  updateNewLoc(e) {
    this.setState({
      newLoc: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newLoc)
    this.setState({
      newLoc: ''
    })
  }
  render() {
    return(
      <div>
        <input
          type="text"
          value={this.state.newLoc}
          onChange={this.updateNewLoc}
        />
        <button onClick={this.handleAddNew}>Add Location</button>
      </div>
    )
  }
}

class ShowLocs extends React.Component {
  render() {
    return (
      <div>
        <h4>Locations</h4>
        <ul>
          {this.props.locations.map((loc) => {
            return <li> {loc} </li>
          })}
        </ul>
      </div>
    )
  }
}

class GeoLocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicle: 'BW 941 YD',
      locs: [],
    }

    this.addLoc = this.addLoc.bind(this)
  }
  addLoc(loc) {
    this.setState((state) => ({
      locs: state.locs.concat([loc])
    }))
  }
  render() {
    return (
      <div>
        <h3>Vehicle: {this.state.vehicle}</h3>
        <AddLoc addNew={this.addLoc}/>
        <ShowLocs locations={this.state.locs}/>
      </div>
    )
  }
}

ReactDOM.render(<GeoLocs />, document.getElementById('root'));
