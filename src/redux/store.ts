import { configureStore } from '@reduxjs/toolkit';
import { MatrixSlice } from './MatrixSlice';

const store = configureStore({
	reducer: {
		matrixReducer: MatrixSlice.reducer,
	},
});

export type StoreType = ReturnType<typeof store.getState>;

export default store;
