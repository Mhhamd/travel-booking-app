import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import popularReducer from './slices/popularSlice';
import flightReducer from './slices/flightSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'selectedFlight',
    storage,
};

const flightPersistedReducer = persistReducer(persistConfig, flightReducer);

const rootReducer = combineReducers({
    search: searchReducer,
    popularCity: popularReducer,
    selectedFlight: flightPersistedReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
