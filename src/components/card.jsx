import React, { Component } from 'react';

import flats from '../../data/flats';

class Card extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
    super(props);
    this.state = { }; // defines initial state
    // console.log(this.props.index);
  }

  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    return (
      <div className={this.props.selectedFlat ? "card active" : "card"} onClick={this.handleClick} style={{ backgroundImage: `url(${this.props.flat.imageUrl})` }} >
        <div className="card-category"> {this.props.flat.price} EUR </div>
        <h2 className="card-description">{this.props.flat.name}</h2>
      </div>
    );
  }
}

export default Card;
