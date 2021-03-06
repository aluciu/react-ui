import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import Avatar from 'elements/Avatar/Avatar.jsx';
import ClickOutside from 'elements/click-outside/click-outside.jsx';
import cx from 'classnames';
import css from './UserCard.css';
import { 
  TiCog,
  TiArrowSortedDown
} from "react-icons/ti";

class UserCard extends Component {
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
    const { avatar, name, description, roundedAvatar } = this.props;

    return (
      <div className={css.userCard}>
        {roundedAvatar ?
          <div className={css.avatarContainer}>
            <Avatar
              size={120}
              image={avatar}
            />
          </div>
        :
          <div
            className={css.picture}
            style={{ backgroundImage: `url(${avatar})` }}
          />
        }
        <div className={css.content}>
          <h3 className={css.name}>
            {name}
          </h3>
          <p className={css.desc}>
            {description}
          </p>
        </div>

        <div className={css.bottom}>
          <ClickOutside onClickOutside={this.state.menuCollapsed ? this.handleMenu : _noop}>
            <div className={css.menuContainer}>
              <button
                className={cx(css.menuToggle, { [css.open]: this.state.menuCollapsed })}
                onClick={() => {
                  this.handleMenu();
                }}
              >
                <TiCog size={25} />
                <TiArrowSortedDown />
              </button>
              <div className={cx(css.menuPopup, { [css.open]: this.state.menuCollapsed })}>
                <ul>
                  <li><a href="#">Menu Item 1</a></li>
                  <li><a href="#">Menu Item 2</a></li>
                </ul>
              </div>
            </div>
          </ClickOutside>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  roundedAvatar: PropTypes.bool,
}

export default UserCard;
