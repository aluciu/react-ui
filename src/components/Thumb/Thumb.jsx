import React, { Component } from 'react';

import css from './Thumb.css';

class Thumb extends Component {
  render() {
    return (
      <div
        className={css.thumb}
        style={{ backgroundImage: `url(${this.props.image})` }}
      />
    );
  }
}

export default Thumb;
