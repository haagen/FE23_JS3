import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import dogReducer from './dogSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        dog: dogReducer
    }
});
