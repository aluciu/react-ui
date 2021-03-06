import React, { Component, cloneElement } from 'react';
import Ripple from 'react-material-ripple';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './Button.css';

class Button extends Component {
  render() {
    const { label, alt, icon, ripple } = this.props;

    let sizedIcon = null;
    let buttonContent = label;
    if(icon) {
      sizedIcon = cloneElement(icon, {
        size: 50,
      });
      buttonContent = sizedIcon;
    }

    if(ripple) {
      return (
        <Ripple className={css.btnRipple}>
          <button className={cx(css.btn, {[css.btnIcon]: icon, [css.btnAlt]: alt})} alt={label}>
            {buttonContent}
          </button>
        </Ripple>
      );
    }

    return (
      <button className={cx(css.btn, {[css.btnIcon]: icon, [css.btnAlt]: alt})} alt={label}>
        {buttonContent}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  alt: PropTypes.bool,
  ripple: PropTypes.bool,
}

export default Button;
