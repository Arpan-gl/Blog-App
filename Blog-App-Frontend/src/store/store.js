import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
    reducer: authReducer, // Add your reducers here
});

export default store;