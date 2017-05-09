import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ClickOutside extends Component {

  componentDidMount() {
    document.addEventListener('click', this.onClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside, true);
  }

  onClickOutside = (e) => {
    const el = ReactDOM.findDOMNode(this);

    if (!el || !el.contains(e.target)) {
      this.props.onClickOutside(e);
    }
  }

  render() {
    return this.props.children;
  }
}

ClickOutside.propTypes = {
  children: PropTypes.node,
  onClickOutside: PropTypes.func,
}

export default ClickOutside;
