import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import cx from 'classnames';
import css from './Chat.css';

class Chat extends Component {
  render() {
    const { date, chatText, alt } = this.props;

    const momentDate = moment.unix(date).format('HH:mm');

    return (
      <div className={cx(css.chat, {[css.alternante]: alt})}>
        {chatText}
        <p className={css.date}>{momentDate}</p>
      </div>
    );
  }
}

Chat.propTypes = {
  date: PropTypes.string.isRequired,
  chatText: PropTypes.string.isRequired,
  alt: PropTypes.bool,
}

export default Chat;
