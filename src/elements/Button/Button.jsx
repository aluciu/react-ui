import React, {Component, PropTypes} from 'react';

import cx from 'classnames';
import css from './Button.css';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  render() {
    const { label } = this.props;

    return (
      <button className={cx(css.btn)}>{label}</button>
    );
  }
}

export default Button;
