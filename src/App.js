import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ron', age: 27 },
      { name: 'Jess', age: 31 },
      { name: 'Drew', age: 37 }
    ],
    showPersons: false
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

  reloadWindow = (e) => {
    window.location.reload()
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Ron', age: 27 },
        { name: e.target.value, age: 31 },
        { name: 'Drew', age: 37 }
      ]
    })
  }

  togglePersonsHandler = (e) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Welcome</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/*onClick={this.switchNameHandler}>Switch Name</button>*/}
        <button
          style={style}
          onClick={this.reloadWindow}>Reload Window</button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler}
              changed={this.nameChangedHandler} >Testing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
