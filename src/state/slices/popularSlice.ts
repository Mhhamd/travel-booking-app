import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PopularState {
    popularCity: string;
}

const initialState: PopularState = {
    popularCity: '',
};

const popularSlice = createSlice({
    name: 'popularCity',
    initialState,
    reducers: {
        setPopular: (state, action: PayloadAction<string>) => {
            state.popularCity = action.payload;
        },
    },
});

export const { setPopular } = popularSlice.actions;
export default popularSlice.reducer;
