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
      <div className='row'>
        <Option character={characters[this.random()]} type={this.props.type} />
        <Option character={characters[this.random()]} type={this.props.type} />
      </div>
      <div className='row'>
        <Option character={this.answer(answerIndex)} answer={true} type={this.props.type} />
        <Option character={characters[this.random()]} type={this.props.type} />
      </div>
    </div>
  }

  render() {
    var answerIndex = this.random()
    return (
      <div>
        <div className='question'>
          What is the <span className='type'>{this.props.type}</span> of <span className='romanji'>{this.answer(answerIndex).romanji}</span>?
        </div>
        {this.options(answerIndex)}
      </div>
    );
  }
}

export default Kana;
