import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './Button.css';

class Button extends Component {
  render() {
    const { label } = this.props;

    return (
      <button className={cx(css.btn)}>{label}</button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button;
