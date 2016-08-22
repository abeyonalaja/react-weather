import React,{ Component } from 'react';
import Nav from './Nav';
import Weather from './Weather'

class Main extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <h2>Main is in the house</h2>
        { this.props.children }
      </div>
    );
  }
}

export default Main;
