import React, {Component} from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import css from './PageLayout.css';


class PageLayout extends Component {
  render() {
    const [
      first,
      second,
    ] = this.props.children;

    const { sidebar } = this.props;


    return (
      <div className={cx(css.pageContainer, css[sidebar])}>
        <div className={css.content}>
          {first}
        </div>
        {sidebar &&
          <div className={css.sidebar}>
            {second}
          </div>
        }
      </div>
    );
  }
}

PageLayout.propTypes = {
  sidebar: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.arrayOf(PropTypes.node),
  custom(props, propName, componentName) { // eslint-disable-line consistent-return
    if (props.children.length !== 2) {
      return new Error(
        `${componentName} needs exactly 2 children`
      );
    }
  },
}

export default PageLayout;
