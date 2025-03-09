import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import popularReducer from './slices/popularSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        popularCity: popularReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
