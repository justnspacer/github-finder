import React, { Component } from 'react';
import { ReactPropTypes } from 'react';

class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: ReactPropTypes.string.isRequired,
    icon: ReactPropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
