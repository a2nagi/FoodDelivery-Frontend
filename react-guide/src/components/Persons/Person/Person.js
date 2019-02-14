// We want to create a component

import React from 'react';
import './Person.css'
const person = (props) => {
    // As we said we are creating a component, it is a function that simply outputs JSX
    return(
        <div className="Person">
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

// Exporting the constant (person) we just created.
export default person;
