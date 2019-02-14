import React from 'react';

const cockpit = (props) => {

    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
        <div>
        <h1> Hi I'm a react app!</h1>
        <p>This is really Working!</p>
        <button style = {style} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;