import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FlightState {
    airLine: string;
    arrivalCity: string;
    arrivalCountry: string;
    departureCity: string;
    departureCountry: string;
    duration: number;
    id: number;
    image?: string; // Now optional
    seatsAvailable: number;
    class: string;
}

const initialState: FlightState[] = [];

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        addFlight: (state, action: PayloadAction<FlightState>) => {
            state.push(action.payload);
        },
    },
});

export const { addFlight } = flightsSlice.actions;
export default flightsSlice.reducer;
