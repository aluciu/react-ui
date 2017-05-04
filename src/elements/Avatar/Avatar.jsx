import React, {Component} from 'react';
import _map from 'lodash/map';
import css from './Avatar.css';

class Avatar extends Component {
  render() {
    const { size, image } = this.props;

    return (
      <div
        className={css.avatar}
        style={{width: size, height: size, backgroundImage: `url(${image})` }}
      />
    );
  }
}

export default Avatar;
