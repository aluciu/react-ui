import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default Avatar;
