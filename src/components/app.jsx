import React, { Component } from "react";

// TODO:
// 1) Initiate app and initial state
// 2) Retrieve user location via geolocation service
// 3) Update state
// 4) Render weather method

class App extends Component {
  state = { latitude: null, longitude: null, errorMessage: "" }

  // constructor(props) {
  //   super(props);
  //   this.state = { latitude: null, longitude: null, errorMessage: "" };
  // }

  // Geolocation API - initialised when component is mounted
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.latitude && this.state.longitude) {
      return <div>Latitude: {this.state.latitude} | Longitude:{this.state.longitude}</div>
    } else {
      return<div>Loading...</div>
    }
  }
}

export default App;
