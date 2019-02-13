// We want to create a component

import React from 'react';

const person = (props) => {
    // As we said we are creating a component, it is a function that simply outputs JSX
    return(
        <div>
            <p> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

// Exporting the constant (person) we just created.
export default person;
