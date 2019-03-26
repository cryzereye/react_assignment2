import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    length : 0,
    word : '',
  };

  wordLengthHandler = (word) => {
    let length = {...this.state.length};
    length = word.length;
    this.setState({length: length});
  }

  wordChangeHandler = (event) => {
    let word = {...this.state.word};
    word = event.target.value;
    this.setState({word: word});
    this.wordLengthHandler(word);
  }

  characterHandler = (style) => {
    let word = [...this.state.word];
    let code = word.map((letter) => {
      return <Char 
        style={style}
        letter={letter}/>
    })
    console.log(this.state);
    return code;
  }

  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      'text-align': 'center',
      margin: '16px',
      border: '1px solid black'
    };

    const characters = this.characterHandler(style);
  
    return (
      <div className="App">
        <input type="text"
        onChange = {(event) => this.wordChangeHandler(event)}/>
        <Validation comment = {this.state.length < 5 ? "Too short" : "Enough"}/>
        { characters }
      </div>
    );
  }
}

export default App;
