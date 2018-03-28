import React, { Component } from 'react';

class Option extends Component {
  render() {
    return (
      <div className={ this.props.answer ? 'answer card col-6' : 'card col-6' }>
        {this.props.character[this.props.type]}
      </div>
    );
  }
}

export default Option;
