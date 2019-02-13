import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
// Home to the root component

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1> Hi I'm a react app!</h1>
        <p>This is really Working!</p>
        <Person name ="Max" age="28"/>
        <Person name="Manu" age="29" >My Hobbies: Racing </Person>
        <Person name="Stephanie" age="26"/>
      </div>
    
    // The way we use React.createElement below is the exact same as the html above. In fact the above gets compiled 
    // to execute the below called function.
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));

    )
  }
}

export default App;
