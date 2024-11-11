import { actionType, CarsType, CarType } from 'src/types/types';
import { cars as carsData } from 'src/data/cars';
import { createStore } from 'redux';

const initialState = {
	cars: carsData,
	comparedCars: [],
};

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

export const addCarToComparison = payload => {
	return {
		type: 'comparedCars/add',
		payload,
	};
};

export const removeCarFromComparison = payload => {
	return {
		type: 'comparedCars/remove',
		payload,
	};
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

		case 'comparedCars/add': {
			return {
				...state,
				comparedCars: [...state.comparedCars, action.payload.id],
			};
		}

		case 'comparedCars/remove': {
			return {
				...state,
				comparedCars: state.comparedCars.filter(car => car.id !== action.payload.id),
			};
		}

		default:
			return state;
	}
};

export const store = createStore(carsReducer);
