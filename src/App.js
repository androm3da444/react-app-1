import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ron', age: 27 },
      { name: 'Jess', age: 31 },
      { name: 'Drew', age: 37 }
    ]
  }

  switchNameHandler = (e) => {
    //this.state.persons[0].name = 'Tuna';
    this.setState({
      persons: [
        { name: 'A', age: 21 },
        { name: 'B', age: 22 },
        { name: 'C', age: 23 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Testing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
