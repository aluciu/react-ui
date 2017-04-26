import React, {Component} from 'react';
import _map from 'lodash/map';
import cx from 'classnames';
import css from './Sidebar.css';

class Sidebar extends Component {
  render() {
    const { title, nav, alt } = this.props;

    return (
      <div className={cx(css.sidebar, {[css.alternante]: alt})}>
        <h3 className={css.title}>{title}</h3>
        <ul>
          {_map(nav, (item) => {
            return (
              <li key={item.id}><a href={item.url}>{item.label}</a></li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
