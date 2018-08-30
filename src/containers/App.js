import React, { Component } from 'react';
import classes from './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Ron', age: 27 },
      { id: 'asdf2', name: 'Jess', age: 31 },
      { id: 'asdf3', name: 'Drew', age: 37 }
    ],
    showPersons: false
  }

  /*switchNameHandler = (e) => {
    //this.state.persons[0].name = 'Tuna';
    this.setState({
      persons: [
        { name: 'A', age: 21 },
        { name: 'B', age: 22 },
        { name: 'C', age: 23 }
      ]
    })
  }*/

  reloadWindow = (e) => {
    window.location.reload()
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = (e) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(e) => this.nameChangedHandler(e, person.id)} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Welcome</h1>
        <p className={assignedClasses.join(' ')}>This is cool</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/*onClick={this.switchNameHandler}>Switch Name</button>*/}
        {/*<button
          style={style}
          onClick={this.reloadWindow}>Reload Window</button>*/}
        {persons}
      </div>
    );
  }
}

export default App;
