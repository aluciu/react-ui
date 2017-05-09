import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _map from 'lodash/map';

import MenuItem from 'components/Menu/Item';
import Search from 'components/Search/Search';
import css from './Menu.css';

class Menu extends Component {
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

Menu.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default Menu;
