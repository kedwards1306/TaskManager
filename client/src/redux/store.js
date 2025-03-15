import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlices.js';
import authReducer from './slices/authSlice.js';


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,

});

export default store;
