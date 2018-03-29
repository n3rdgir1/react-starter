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

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  randomOptions(answerIndex) {
    return this.shuffle([
      {kana: characters[this.random()], answer: false},
      {kana: characters[this.random()], answer: false},
      {kana: characters[this.random()], answer: false},
      {kana: this.answer(answerIndex), answer: true}
    ]);
  }

  render() {
    const answerIndex = this.random()
    const options = this.randomOptions(answerIndex)
    return (
      <div>
        <div className='question'>
          What is the <span className='type'>{this.props.type}</span> of <span className='romanji'>{this.answer(answerIndex).romanji}</span>?
        </div>
        <div className='answers'>
          <div className='row'>
            <Option character={options[0].kana} answer={options[0].answer} type={this.props.type} />
            <Option character={options[1].kana} answer={options[1].answer} type={this.props.type} />
          </div>
          <div className='row'>
            <Option character={options[2].kana} answer={options[2].answer} type={this.props.type} />
            <Option character={options[3].kana} answer={options[3].answer} type={this.props.type} />
          </div>
        </div>
      </div>
    );
  }
}

export default Kana;
