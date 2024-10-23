// Initiala state
const initalState = {
    reduxCounter: 0
};

// Reducer-funktion - den beräknar den nya staten
//    genom att titta på den gamla staten och
//    informaitonen i action. 
export default function counterReducer(state = initalState, action) {

    console.log('in counterReducer: ', state.counter, action.type, action.payload)

    if(action.type === 'counter/add') {
        return  { 
            ...state,
            reduxCounter: state.reduxCounter + action.payload
        };
    }

    return state;
}

// Actions och Action Creators

// addCounter - används för att räkna upp räknaren
//    nbr - säger hur mycket vi skall räkna upp med
export const addCounter = (nbr) => {
    return {
        type: 'counter/add',
        payload: nbr
    };
}

// Selector funktioner
//  returnerar räknaren från staten
export const selectCounter = function(state) {
    return state.counter.reduxCounter;
}

// export addCounter, selectCounter;
// export default counterReducer;