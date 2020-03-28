import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import CardList from './card_list';
import Marker from './marker';
import flats from '../../data/flats';

class App extends Component { // A stateful component needs to

  static defaultProps = {
    zoom: 12
  };

  constructor(props) { // be promoted into a class
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats : flats
    }; // defines initial state
    // console.log(this.state.center);
    // console.log(MyObject)
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index],
    });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <CardList flats={this.state.flats} flatSelected={this.state.selectedFlat} selectFlatFunction={this.selectFlat} />
        </div>
        <div className="map-container">
          <h1>map-container</h1>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={this.center()}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
