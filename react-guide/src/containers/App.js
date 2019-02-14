import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons.js'
import Cockpit from '../components/Cockpit/Cockpit.js'
// Home to the root component

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  // Think of the below function as a class method that is being used by onClick button
  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximillian'
    this.setState({
      persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 32 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = this.state.persons[personIndex]
    this.setState({
      persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 32 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    if (this.state.showPersons){
      persons = (
            <Persons 
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed={this.nameChangeHandler} />
      )
    }

    return(
      <div className="App">
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>

    
    // The way we use React.createElement below is the exact same as the html above. In fact the above gets compiled 
    // to execute the below called function.
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));

    );
  }
}

export default App;
