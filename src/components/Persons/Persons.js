import React from 'react';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => this.deletePersonHandler(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(e) => this.nameChangedHandler(e, person.id)} />
});