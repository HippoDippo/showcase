import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    }
  }
  
  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  checkForPalindrome(string) {
    var reversedString = string.split('').reverse().join('');
    var result;

    if (reversedString === string)
      result = true;
    else
      result = false;

    this.setState({
      palindrome: String(result)
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input onChange={ (e)=> this.handleChange(e.target.value) } className="inputLine"></input>
        <button onClick={ ()=> this.checkForPalindrome(this.state.userInput) } className="confirmationButton">Check</button>
        <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
      </div>
    )
  }
}