import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import Kana from './Kana';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kana: 'hiragana'
    }
  }

  render() {
    return (
      <div className="main">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Kanas</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Hiragana</NavItem>
            <NavItem eventKey={2} href="#">Katakana</NavItem>
          </Nav>
        </Navbar>
        <Kana type={this.state.kana} />
      </div>
    );
  }
}

export default App;
