import React, { Component } from 'react';

class Option extends Component {
  render() {
    return (
      <div className={ this.props.answer ? 'answer' : '' }>
        {this.props.character[this.props.type]}
      </div>
    );
  }
}

export default Option;
