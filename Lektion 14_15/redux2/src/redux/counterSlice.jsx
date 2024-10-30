import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: 'counter',
    initialState: {
        stateValue: 0,
        status: "None"
    },
    reducers: {
        add: (state, action) => {
            console.log(action);
            state.stateValue += action.payload;
        },
        clear: (state, action) => {
            console.log(action);
            state.stateValue = 0;
        }
    },
    selectors: {    // Här skapar vi våra selektorer
        selectCounter: (state) => {
            return state.stateValue;
        },
        getStatus: (state) => {
            return state.status;
        }
    },
    extraReducers(builder) {
        builder.addCase(
            addDelayedRandomNumber.pending,
            (state, action) => {
                state.status = "Väntar!";
            }
        );     
        builder.addCase(
            addDelayedRandomNumber.fulfilled,
            (state, action) => {
                state.stateValue += action.payload;
                state.status = "Klar!"
            }
        );
    }
});

export const addDelayedRandomNumber = createAsyncThunk(
    'counter/addDelayedRandomNumber',
    (data) => { // Vi förväntar oss att timeouten i sekunder finns i delay och max talet i max
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    resolve(Math.floor(Math.random()*data.max) + 1);
                },
                data.delay * 1000
            )
        });
    }
);

export const { add, clear } = counterSlice.actions;
export const { selectCounter, getStatus } = counterSlice.selectors;
export default counterSlice.reducer;