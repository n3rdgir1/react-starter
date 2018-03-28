import React, { Component } from 'react';

class Option extends Component {
  className() {
    let classString = 'card col-6 '
    if(this.state) classString += this.state.correct ? 'correct' : 'incorrect';
    return classString;
  }

  kana() {
    return this.props.character[this.props.type];
  }

  handleClick(e) {
    if(!this.state) {
      this.setState({correct: this.props.answer})
    } else if (this.state.correct) {
      window.location.reload();
    }
  }

  render() {
    return (
      <div className={ this.className.bind(this)() } onClick={ this.handleClick.bind(this)}>
        {this.kana.bind(this)()}
      </div>
    );
  }
}

export default Option;
