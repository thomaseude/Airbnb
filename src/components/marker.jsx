import React, { Component } from 'react';


class Marker extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
    super(props);
    this.state = { }; // defines initial state
    // console.log(this.props.flatSelected);
     // console.log(`hello ${this.props.selectFlat}`);
     console.log(this.props.flatSelected)
  }

  render() {
    return (
      <div
        className="marker"
        lat={this.props.lat}
        lng={this.props.lng}
      >
      </div>
    );
  }
}

export default Marker;
