import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import popularReducer from './slices/popularSlice';
import flightReducer from './slices/flightSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        popularCity: popularReducer,
        selectedFlight: flightReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
