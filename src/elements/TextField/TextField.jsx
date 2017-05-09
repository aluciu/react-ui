import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';

import _snakeCase from 'lodash/snakeCase';
import _uniqueId from 'lodash/uniqueId';

import css from './TextField.css';

class TextField extends Component {
  render() {
    const { icon, label, type } = this.props;

    let sizedIcon = cloneElement(icon, {
      size: 16,
    });

    let elementId = _uniqueId(_snakeCase(label) + '_');

    return (
      <div className={css.textField}>
        <label className={css.txtLabel} htmlFor={elementId}>{label}</label>

        <div className={css.field}>
          <div className={css.icon}>
            {sizedIcon}
          </div>
          <input className={css.txtInput} type={type} id={elementId} autoComplete="off" />
        </div>
      </div>
    );
  }
}

TextField.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email']).isRequired,
}

export default TextField;
