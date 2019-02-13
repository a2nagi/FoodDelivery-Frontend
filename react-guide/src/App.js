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
    ]
  }

  // Think of the below function as a class method that is being used by onClick button
  switchNameHandler = () => {
    console.log("Was Clicked!");
  }

  render() {
    return(
      <div className="App">
        <h1> Hi I'm a react app!</h1>
        <p>This is really Working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age} >My Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
      </div>
    
    // The way we use React.createElement below is the exact same as the html above. In fact the above gets compiled 
    // to execute the below called function.
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));

    )
  }
}

export default App;
