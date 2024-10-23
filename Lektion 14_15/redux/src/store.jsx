// npm install @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import preferenceReducer from './preferenceReducer';

export default configureStore({
    reducer: {
        counter: counterReducer,
        preference: preferenceReducer
    }
});