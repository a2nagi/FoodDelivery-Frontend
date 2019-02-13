import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
      // <div className="App">
      //   <h1> Hi I'm a react app!</h1>
      // </div>
    
    // The way we use React.createElement below is the exact same as the html above. In fact the above gets compiled 
    // to execute the below called function.
    return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
