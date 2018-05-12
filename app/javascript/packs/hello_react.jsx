// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

// function NewDevice
// renders MessageForm with NewDeviceMessage and Name input
// upon submit, replaces content with WelcomeMessage
class NewDevice extends React.Component {
  render() {
    if (this.props.currentUser.device !== 'XYZ') {
      return <p>Hello! We haven't seen you before, how should we call you ?</p>;
    }
    return <VehicleCloseBy currentUser={this.props.currentUser} />;
  }
}

// function VehicleCloseBy
class VehicleCloseBy extends React.Component {
  render() {
    if (VEHICLE.device == this.props.currentUser.device) {
      return <DistanceCompute currentUser={this.props.currentUser} currentVehicle={VEHICLE} />
    }
  }
}

// Compute distance
class DistanceCompute extends React.Component {
  render() {
    const R = 6371e3;
    const φ1 = this.props.currentUser.location[1] * Math.PI / 180;
    const φ2 = this.props.currentVehicle.location[1] * Math.PI / 180;
    const λ1 = this.props.currentUser.location[0] * Math.PI / 180;
    const λ2 = this.props.currentVehicle.location[0] * Math.PI / 180;
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.round(Math.sqrt(x*x + y*y) * R);
    return <p>Device is {this.props.currentUser.device} and Vehicle is {VEHICLE.device} are {d} meters away</p>;
  }
}

//return <p>Welcome back Philippe! Your vehicle is x meters away. Do you intend to ride it?</p>;

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
class LocationMap extends React.Component {
  render() {
    return (
      <div>
        <h1>Device: {this.props.currentUser.device}</h1>
        <p>Longitude = {this.props.currentUser.location[0]}</p>
        <p>Latitude = {this.props.currentUser.location[1]}</p>
        <p></p>
        <NewDevice currentUser={this.props.currentUser} />
      </div>
    );
  }
}
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

const USER = {
  device: 'XYZ',
  location: [-0.5893511, 44.8496514]};
const VEHICLE = {
  device: 'XYZ',
  location: [-0.5899109, 44.8498465]};

ReactDOM.render(<LocationMap currentUser={USER} />, document.getElementById('root'));
