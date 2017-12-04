import React, { Component } from 'react';

export default class Sum extends Component {
  constructor() {
    super();
    
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  
  handleChange1(num1) {
    var number1 = parseInt(num1, 10);
    this.setState({ number1: number1 });
  }

  handleChange2(num2) {
    var number2 = parseInt(num2, 10);
    this.setState({ number2: number2 });
  }

  addNums(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input onChange={ (e)=> this.handleChange1(e.target.value) } className="inputLine"></input>
        <input onChange={ (e)=> this.handleChange2(e.target.value) }className="inputLine"></input>
        <button onClick={ () => this.addNums(this.state.number1, this.state.number2) } className="confirmationButton">Add</button>
        <span className="resultsBox">Sum: { this.state.sum }</span>
      </div>
    )
  }
}