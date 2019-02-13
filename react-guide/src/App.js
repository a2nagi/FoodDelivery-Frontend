import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js'
// Home to the root component

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value'
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

 // Eve
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 32 }
      ]
    })
  }

  render() {
    return(
      <div className="App">
        <h1> Hi I'm a react app!</h1>
        <p>This is really Working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian!!')}>Switch name</button>
        <Person 
          name ={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}>My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    
    // The way we use React.createElement below is the exact same as the html above. In fact the above gets compiled 
    // to execute the below called function.
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));

    )
  }
}

export default App;
