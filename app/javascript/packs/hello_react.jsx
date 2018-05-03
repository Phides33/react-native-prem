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

// function NewDevice
// renders MessageForm with NewDeviceMessage and Name input
// upon submit, replaces content with WelcomeMessage

// function RunDemo
// renders requested DemoStepVideo, by default first

// function VehicleChoiceForm
// renders choice list from VehicleList
//         NewVehicle input field

// function VehicleList
// renders list of vehicles with edit / delete

// function VehicleOnRide
// renders MessageForm with VehicleCloseMessage and Ride button
// upon submit, replaces content with VehicleOnRideMessage

// function VehicleParked
// renders VehicleToParkMessage and triggers VehicleChoiceForm
// upon submit, replaces content with VehicleParkedMessage

// function ControllingAgentLoc
// renders SignalAgentMessage and shows ControllingAgentLoc

// function ShowAccount
// renders
// - Name
// - VehicleList

// function Menu
// renders MenuChoice

// function LocationMap
// renders
// - Banner
// - a google map centered on the device gps coordinates
// - if device is unknown trigger NewDevice
// - if device is known :
//   renders Menu
//   - if parked vehicle is associated to it and device is close to vehicle or
//     MenuChoice is "Ride Vehicle" then trigger VehicleOnRide
//   - else trigger VehicleParked
//   - if controlling agent is close or MenuChoice is "Signal Agent" then trigger ControllingAgentLoc
//   - if MenuChoice is "Park vehicle" then trigger VehicleParked
//   - if MenuChoice is "My account" then trigger ShowAccount
//   - if MenuChoice is "Run demo" then trigger RunDemo
