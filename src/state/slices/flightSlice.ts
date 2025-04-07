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

const initialState: FlightState = {
    airLine: '',
    arrivalCity: '',
    arrivalCountry: '',
    departureCity: '',
    departureCountry: '',
    duration: 0,
    id: 0,
    image: '',
    seatsAvailable: 0,
    class: '',
};

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        addFlight: (state, action: PayloadAction<FlightState>) => {
            return { ...action.payload };
        },
    },
});

export const { addFlight } = flightsSlice.actions;
export default flightsSlice.reducer;
