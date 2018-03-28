import React, { Component } from 'react';
import './App.css';
import Kana from './Kana';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kana: 'hiragana'
    }
  }

  kana(type) {
    this.setState({kana: type})
  }

  render() {
    return (
      <div className="main">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Kanas</a>
          <div className="navbar" id="navbarNav">
            <a className="nav-item nav-link active" href="#" onClick={() => this.kana('hiragana') }>Hiragana</a>
            <a className="nav-item nav-link active" href="#" onClick={() => this.kana('katakana') }>Katakana</a>
          </div>
        </nav>

        <Kana type={this.state.kana} />
      </div>
    )
  }
}

export default App;
