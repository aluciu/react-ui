import React, { Component } from 'react';

import MdSearch from 'react-icons/lib/md/search';
import cx from 'classnames';
import css from './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      searchString: event.target.value,
    });
  }

  handleSubmit = (event) => {
    alert('Searching ' + this.state.searchString);
    event.preventDefault();
  }

  render() {
    const uniqueId = 'search_' + new Date().getTime();
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={cx(css.search, {[css.alternante]: this.props.alt})}>
          <label htmlFor={uniqueId} className={css.icon}>
            <MdSearch size={35} />
          </label>
          <input
            className={css.searchInput}
            id={uniqueId}
            type="text"
            placeholder="Search..."
            value={this.state.searchString}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default Search;
