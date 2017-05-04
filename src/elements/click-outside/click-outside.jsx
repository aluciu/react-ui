import { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class ClickOutside extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClickOutside: PropTypes.func,
  }

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

export default ClickOutside;
