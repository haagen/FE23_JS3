import { useReducer, useState } from 'react';

/*
    state   - innehåller ett tal, måste vara 0 eller en multipel av 10.
            - bara kan räkna upp eller ner med 10 åt gången.

            payload = boolean
*/
function reducerFunction(state, payload) {
    console.log('reducerFunction - payload:', payload);
    if(payload) {
        return state + 10;
    }
    return state - 10;
}

/*
    state   - innehålla ett tal, men det får inte vara mindre än 0 
            - vi kan räkna upp eller räkna ner det med ett godtyckligt tal

            payload = {
                value:number (vårt tal)
                operation:string (add, subtract)
            }
*/
function reducerFunction2(state, payload) {
    console.log('reducerFunction2 - payload', payload);

    switch(payload.operation) {
        case 'add':
            return state + payload.value;
        case 'subtract':
            return state - payload.value < 0 ? 0 : state - payload.value;
        default:
            return state;
    }
}


function Reducer(props) {

    // const [ counter, dispatch ] = useReducer(reducerFunction, 0);
    const [ counter, dispatch ] = useReducer(reducerFunction2, 0); 
    const [ userInput, setUserInput ] = useState("0");

    const increaseWith10 = (e) => {
        console.log('I eventhandler: increaseWith10');
        // dispatch(true);
        dispatch({ operation: 'add', value: parseInt(userInput) });
    }

    const decreaseWith10 = (e) => {
        console.log('I eventhandler: decreaseWith10');
        // dispatch(false);
        dispatch({ operation: 'subtract', value: parseInt(userInput) });
    }


    return (
        <>
            <strong>Reducer Counter:</strong> { counter }<br />
            <label htmlFor="number">Tal</label><br />
            <input 
                type="number" 
                value={ userInput } 
                onChange={ (e) => { setUserInput( o => e.target.value) }}
                id="number"
            /><br />
            <button onClick={ decreaseWith10 }> - </button>
            <button onClick={ increaseWith10 }> + </button>
        </>
    )

}

export default Reducer;