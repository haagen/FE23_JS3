//import { useState } from 'react';
import React from 'react';

export default function State(props) {

    // props.maxNumber -- det största initiala talet vi kan, men starttalet är slumpa

    const [ number, setNumber ] = React.useState(() => {
        return Math.floor(Math.random()*props.maxNumber) + 1;   // Slumpa ett tal mellan 1 och 10. 
    });

    return (
        <>
            <strong>{ number }</strong><br />
            <button 
                onClick={ (e => { 
                    setNumber( (n) => { return n + 1; }); /* n => n + 1 */
                }) }   
            >
                +1
            </button>
        </>
    );
}