import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _find from 'lodash/find';
import Avatar from 'elements/Avatar/Avatar.jsx';
import { users } from 'mock-data';

import cx from 'classnames';
import css from './Comment.css';

class Comment extends Component {
  getUserData = (id) => {
    return _find(users, ['id', id]);
  }

  render() {
    const {id, date, chatText, alt } = this.props;

    const momentDate = moment.unix(date).fromNow();

    return (
      <div className={cx(css.comment, {[css.alternante]: alt})}>
        <div className={css.avatar}>
          <Avatar
            size={90}
            image={this.getUserData(id).avatar}
          />
        </div>
        <div className={css.right}>
          <div className={css.name}>{this.getUserData(id).name}</div>
          <div className={css.commentText}>{chatText}</div>

          <ul className={css.meta}>
            <li>{momentDate}</li>
            <li><a href="#">answer</a></li>
            <li><a href="#">like</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  chatText: PropTypes.string.isRequired,
  alt: PropTypes.bool,
}

export default Comment;
