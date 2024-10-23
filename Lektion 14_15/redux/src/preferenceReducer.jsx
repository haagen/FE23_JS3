/*
    TODO
    1. Initial State   v
    2. Reducer Function v
    3. Action Creators
    4. Selectors
*/

const initialState = {
    timezone: 'CST',
    language: 'Danish'
};

export default function preferenceReducer(state = initialState, action) {

    switch(action.type) {
        case 'preference/setLanguage':
            return {
                ...state,
                language: action.payload
            };
            break;
        case 'preference/setTimezone':
            return {
                ...state, 
                timezone: action.payload
            };
            break;
    }

    return state;
}

export function setLanguage(language) {
    return {
        type: "preference/setLanguage",
        payload: language
    };
}

export function setTimezone(timezone) {
    return {
        type: "preference/setTimezone",
        payload: timezone
    };
}

export function selectLanguage(state) {
    console.log(state);
    return state.preference.language;
}

export function selectTimezone(state) {
    return state.preference.timezone;
}