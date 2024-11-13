import { reduxInitialStateType } from 'src/types/types';
import { cars as carsData } from 'src/data/cars';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState: reduxInitialStateType = {
	cars: carsData,
	comparedCars: [],
};

const carsSlice = createSlice({
	name: 'cars',
	initialState: initialState.cars,
	reducers: {
		setCars(state, action) {
			state.at(0); // this line is just TypeScript not to display warning that "'state' is declaed but the value is never read"
			return action.payload;
		},
		addCar(state, action) {
			state.unshift(action.payload);
		},
	},
});

const comparedCarsSlice = createSlice({
	name: 'comparedCars',
	initialState: initialState.comparedCars,
	reducers: {
		addCarToComparison(state, action) {
			state.push(action.payload);
		},
		removeCarFromComparison(state, action) {
			return state.filter(car => car.id !== action.payload);
		},
	},
});

export const { setCars, addCar } = carsSlice.actions;
export const { addCarToComparison, removeCarFromComparison } = comparedCarsSlice.actions;

export const store = configureStore({
	reducer: {
		cars: carsSlice.reducer,
		comparedCars: comparedCarsSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
