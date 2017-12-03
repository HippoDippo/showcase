import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredEmployees: []
    }
  }
  
  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  filterEmployees(prop) {
    var employees = this.state.employees;
    var filteredEmployees = [];

    for (var y = 0; y < employees.length; y++) {
      if (employees[y].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[y]);
      }
    }
  
    this.setState({
      filteredEmployees: filteredEmployees
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10) }</span>
        <input onChange={ (e)=> this.handleChange(e.target.value) } className="inputLine"></input>
        <button onClick={ ()=> this.filterEmployees(this.state.userInput) } className="confirmationButton">Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
      </div>
    )
  }
}