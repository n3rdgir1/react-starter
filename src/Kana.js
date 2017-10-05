import React, { Component } from 'react';
import characters from './kana.json';
import Option from './Option';

class Kana extends Component {
  answer(index) {
    console.log(index)
    return characters[index]
  }

  random() {
    return Math.floor(Math.random() * characters.length)
  }

  options(answerIndex) {
    return <div className='answers'>
      <Option character={characters[this.random()]} type={this.props.type} />
      <Option character={characters[this.random()]} type={this.props.type} />
      <Option character={this.answer(answerIndex)} answer={true} type={this.props.type} />
      <Option character={characters[this.random()]} type={this.props.type} />
    </div>
  }

  render() {
    var answerIndex = this.random()
    return (
      <div>
        {this.answer(answerIndex).romanji}
        {this.options(answerIndex)}
      </div>
    );
  }
}

export default Kana;
