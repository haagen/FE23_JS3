import { useReducer } from "react";

interface YasirsState {
    counter: number;
};

type YasirsAction =
    | { type: 'clear' }
    | { type: 'add', value: number}
    | { type: 'subtract', value: number};

const initialState:YasirsState = { counter: 0 };

const yasirsReducerFunction = (state: YasirsState, action: YasirsAction) => {

    switch(action.type) {
        case "clear":
            return initialState;
        case "add":
            return { 
                ...state, 
                counter: state.counter + Math.abs(action.value)
            };
        case "subtract":
            return {
                ...state, 
                counter: state.counter - Math.abs(action.value)
            }
        default: 
            throw new Error('Whaat?')
    }
}

const YasirsReducer = () => {

    const [ state, dispatch ] = useReducer(yasirsReducerFunction, initialState);

    const onResetClick = () => {
        dispatch({ type: 'clear'});
    }

    const onAdd10Click = () => {
        dispatch({
            type: 'add',
            value: 10
        });
    }

    const onSubtract2Click = () => {
        dispatch({
            type: 'subtract',
            value: 2
        });
    }

    return (
        <div>
            <h2>Yasirs Reducer</h2>
            Counter: { state.counter }<br />
            <button onClick={ onResetClick }>Clear</button>
            <button onClick={ onAdd10Click }>+10</button>
            <button onClick={ onSubtract2Click }>-2</button>

        </div>
    );

}

export default YasirsReducer;