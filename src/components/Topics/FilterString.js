import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      names: [
        "Kaycee",
        "William",
        "Ingram",
        "Is",
        "Awesome"
      ],
      userInput: "",
      filteredNames: []
    }
  }
  
  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  filterStrings(userInput) {
    var names = this.state.names;
    var filteredNames = [];
  
    for (var y = 0; y < names.length; y++) {
      if (names[y].includes(userInput))
        filteredNames.push(names[y]);
    }

    this.setState({
      filteredNames: filteredNames
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: { JSON.stringify(this.state.names, null, 10) }</span>
        <input onChange={ (e)=> this.handleChange(e.target.value) } className="inputLine"></input>
        <button onClick={ ()=> this.filterStrings(this.state.userInput) } className="confirmationButton">Filter</button>
        <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredNames, null, 10) }</span>
      </div>
    )
  }
}