import { useState, useEffect } from 'react';

export default function Effect(props) {

    const [timer, setTimer] = useState(0);
    const [count, setCount] = useState(0);
    // console.log('Timer:', timer);
    // console.log('Count:', count);

    useEffect(
        // effect function
        () => {
            console.log('I effektfunktionen');
            let interval = setInterval(     // Starta timer
                () => {
                    setTimer( t => t + 1);
                }, 
                1000    // 1000ms => 1s
            );

            return () => {
                console.log('I effektfunktions returnerade funktion');
                clearInterval(interval);    // Stäng av timern
                setTimer(0);                // Nollställ timer-räknaren 
            };
        },
        // dependencies - när körs effektfunktionen? 
        [ count ]  // undefined, [], [var1, var2] 
    );

    return (
        <>
            <strong>Timer:</strong> { timer }<br />
            <strong>Count:</strong> { count }<br />

            <button onClick={
                (e) => {
                    setCount( o => o + 1);
                }
            }>
                Räkna upp med 1
            </button>
        </>
    );
}