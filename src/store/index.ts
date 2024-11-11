import { actionType, CarsType, CarType } from 'src/types/types';
import { cars as carsData } from 'src/data/cars';
import { createStore } from 'redux';

export const setCars = (payload: Record<string, string | CarsType>) => {
	return {
		type: 'cars/set',
		payload,
	};
};

export const addCar = (payload: Record<string, string | CarType>) => {
	return {
		type: 'cars/add',
		payload,
	};
};

const initialState = {
	cars: carsData,
};

const carsReducer = (state = initialState, action: actionType) => {
	switch (action.type) {
		case 'cars/set':
			return {
				...state,
				cars: [...action.payload.cars],
			};

		case 'cars/add':
			return {
				...state,
				cars: [action.payload.newCar, ...state.cars],
			};

		default:
			return state;
	}
};

export const store = createStore(carsReducer);
