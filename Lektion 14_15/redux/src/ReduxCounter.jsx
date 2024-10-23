// npm install react-redux
import { useSelector, useDispatch } from 'react-redux';
import { selectCounter, addCounter } from './counterReducer';

export default function ReduxCounter(props){

    // Skapa en "state variabel" från Redux
    const counter = useSelector(selectCounter);
    console.log('?', counter);
    const dispatch = useDispatch();

    const onClick = (nbr) => {
        const action = addCounter(nbr);
        console.log('Action Object', action);
        dispatch(action);
    }


    return(
        <>
            Redux Counter: {counter}<br />
            <button onClick={ (e) => { onClick(1); } }>+1</button>
            <button onClick={ (e) => { onClick(10);} }>+10</button>
        </>
    );
}