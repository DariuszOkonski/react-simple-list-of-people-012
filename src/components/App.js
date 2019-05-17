import React from 'react';
import './App.css';
import people from '../jsonfiles/people.json';
import Person from './Person';

class App extends React.Component {
  state = {
    people: []
  }

  componentDidMount() {
    this.setState({
      people
    })
  }

  handleRemove = (id) => {
    let people = [...this.state.people];
    people = people.filter(person => person.id !== id);

    people.forEach((person, index) => {
      person.id = ++index;
    })

    this.setState({
      people
    })
  }

  handleLineThrough = (id) => {
    let people = [...this.state.people];
    people.forEach(person => {
      if (person.id === id)
        person.line = !person.line
    })

    this.setState({
      people
    })
  }

  render() {
    const person = this.state.people.map(person =>
      <Person
        key={person.id}
        name={person.name}
        city={person.city}
        id={person.id}
        line={person.line}
        removeClick={this.handleRemove}
        lineThrough={this.handleLineThrough}
      />)

    return (
      <div className="app">
        <h2>List of people</h2>
        <ul>
          {person}
        </ul>
      </div>
    );
  }

}

export default App;
