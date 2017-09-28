import React, { Component } from 'react';

class Kana extends Component {

  render() {
    return (
      <div>
        State: {this.props['type']}
      </div>
    );
  }
}

export default Kana;
