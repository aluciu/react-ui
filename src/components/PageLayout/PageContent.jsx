import React, {Component} from 'react';
import PropTypes from 'prop-types';

import css from './PageLayout.css';


class PageContent extends Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <div className={css.pageContent}>
          <h1 className={css.pageTitle}>{title}</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

PageContent.propTypes = {
  title: PropTypes.string,
}

export default PageContent;
