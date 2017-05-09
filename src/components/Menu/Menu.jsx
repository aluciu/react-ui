import React, { Component, PropTypes } from 'react';

import _map from 'lodash/map';

import MenuItem from 'components/Menu/Item';
import Search from 'components/Search/Search';
import css from './Menu.css';

class Menu extends Component {
  static propTypes = {
    nav: PropTypes.array.isRequired,
  }

  render() {
    const { nav } = this.props;

    return (
      <div className={css.menu}>
        <ul className={css.menuList}>
          {_map(nav, (item) => {
            return (
              <MenuItem
                key={item.id}
                {...item}
              />
            );
          })}
        </ul>
        <div className={css.search}>
          <Search />
        </div>
      </div>
    );
  }
}

export default Menu;
