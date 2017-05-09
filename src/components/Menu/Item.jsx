import React, { Component, PropTypes } from 'react';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import ClickOutside from 'elements/click-outside/click-outside.jsx';

import cx from 'classnames';
import css from './Menu.css';

class MenuItem extends Component {
  static propTypes = {
    url: PropTypes.string,
    label: PropTypes.string,
  }

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

    console.log(this.state.menuCollapsed);

    if (submenu) {
      return (
        <ClickOutside onClickOutside={this.state.menuCollapsed ? this.handleMenu : _noop}>
          <li className={cx(css.withSubmenu, { [css.open]: this.state.menuCollapsed })}>
            <a
              href={url}
              onClick={(e) => {
                e.preventDefault();
                this.handleMenu();
              }}
            >
              {label}
            </a>

            <ul className={css.submenuList}>
              {_map(submenu, (item) => {
                return (
                  <li key={item.id}><a href={item.url}>{item.label}</a></li>
                );
              })}
            </ul>
          </li>
        </ClickOutside>
      );
    }

    return (
      <li>
        <a href={url}>{label}</a>
      </li>
    );
  }
}

export default MenuItem;
