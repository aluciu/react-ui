import React, { Component } from 'react';

import moment from 'moment';

import cx from 'classnames';
import css from './Post.css';

class Post extends Component {
  render() {
    const {title, excerpt, date, image, imagePosition} = this.props;
    const momentDate = moment(date, "DD-MM-YYYY");

    return (
      <div
        className={cx(css.post, css[imagePosition])}
      >
        <div className={css.image}>
          <img src={image} alt={title} />
        </div>
        <div className={css.text}>
          <h2 className={css.postTitle}>{title}</h2>
          <p className={css.excerpt}>{excerpt}</p>
          <p className={css.date}>
            {momentDate.format('DD-MM')}
            <span>{momentDate.format('YYYY')}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
