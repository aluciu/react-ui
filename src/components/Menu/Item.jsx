import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import ClickOutside from 'elements/click-outside/click-outside.jsx';

import cx from 'classnames';
import css from './Menu.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: false,
    };
  }

  handleMenu = () => {
    this.setState((prevState) => ({
      menuCollapsed: !prevState.menuCollapsed,
    }));
  }

  render() {
    const { submenu, url, label } = this.props;

    if (submenu) {
      return (
        <ClickOutside onClickOutside={this.state.menuCollapsed ? this.handleMenu : _noop}>
          <li className={cx(css.withSubmenu, { [css.open]: this.state.menuCollapsed })}>
            <Link
              to={url}
              onClick={(e) => {
                e.preventDefault();
                this.handleMenu();
              }}
            >
              {label}
            </Link>

            <ul className={css.submenuList}>
              {_map(submenu, (item) => {
                return (
                  <li key={item.id}><Link to={item.url}>{item.label}</Link></li>
                );
              })}
            </ul>
          </li>
        </ClickOutside>
      );
    }

    return (
      <li>
        <Link to={url}>{label}</Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
}

export default MenuItem;
