import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    }
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  solveEvenAndOdd(userInput) {
    var arr = userInput.split('');
    var evens = []; 
    var odds = [];

    for (var y = 0; y < arr.length; y++) {
      if (arr[y] % 2 === 0) {
        evens.push(parseInt(arr[y], 10));        
      } else {
        odds.push(parseInt(arr[y], 10));
      }
    }
  
    this.setState({
      evenArray: evens,
      oddArray: odds
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={(e)=> this.handleChange(e.target.value)} className="inputLine"></input>
        <button onClick={ ()=> this.solveEvenAndOdd(this.state.userInput) } className="confirmationButton">Split</button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
        <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
      </div>
    )
  }
} 



