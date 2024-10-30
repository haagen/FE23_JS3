
import { useSelector, useDispatch } from "react-redux";
import { selectCounter, getStatus, add, clear, addDelayedRandomNumber } from '../redux/counterSlice';

function CounterV2() {

    const counterValue = useSelector(selectCounter);
    const status = useSelector(getStatus);
    const dispatch = useDispatch();

    return (<>
        <h2>{ counterValue }</h2>
        <h3>Async status: { status }</h3>
        <div>
            <button onClick={ (e) => { dispatch(add(1)); } }>+1</button>
            <button onClick={ (e) => { dispatch(add(5)); } }>+5</button>
            <button onClick={ (e) => { dispatch(clear()); } }>Clear</button>
            <br />
            <button onClick={ (e) => { dispatch(addDelayedRandomNumber({ delay: 5, max: 10 })); } }>Random 5s</button>
            <button onClick={ (e) => { dispatch(addDelayedRandomNumber({ delay: 10, max: 20 })); } }>Random 10s</button>
        </div>
    </>);
}


export default CounterV2;