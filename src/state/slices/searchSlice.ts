import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface inputState {
    from: string;
    goingTo: string;
}

const initialState: inputState = {
    from: '',
    goingTo: '',
};
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setFrom: (state, action: PayloadAction<string>) => {
            state.from = action.payload;
        },
        setGoingTo: (state, action: PayloadAction<string>) => {
            state.goingTo = action.payload;
        },
    },
});

export const { setFrom, setGoingTo } = searchSlice.actions;
export default searchSlice.reducer;
