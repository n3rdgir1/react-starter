import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
  handleSelect(selectedKey) {
    alert(selectedKey)
  }

  render() {
    return (
      <div className="main">
        <Navbar bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default App;
