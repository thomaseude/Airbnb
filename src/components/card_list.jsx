import React, { Component } from 'react';

import Card from './card';

class CardList extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
    super(props);
    this.state = {
    }; // defines initial state
  }

  render() {

    return (
      this.props.flats.map((flat, index) =>
        <Card
        flat={flat}
        key={flat.name}
        selectedFlat={(flat.name === this.props.flatSelected.name)}
        index={index}
        selectFlat={this.props.selectFlatFunction} />)
    );
  }
}

export default CardList;
