/* eslint-disable prefer-const */
/* eslint-disable no-loop-func */
/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import { createMatrix } from '../core/functions';
import { ICell } from '../core/interfaces';

interface IMatrix {
	matrix: Array<Array<ICell>>;
	sortedMatrix: Array<ICell>;
	rows: number;
	columns: number;
	cells: number;
	closesIdArr: Array<ICell>;
}
export const initialState: IMatrix = {
	matrix: [],
	rows: 0,
	columns: 0,
	cells: 0,
	sortedMatrix: [],
	closesIdArr: [],
};
export const MatrixSlice = createSlice({
	name: 'matrix',
	initialState,
	reducers: {
		setMatrixSettings: (state, action) => {
			const { rows, columns, cells } = action.payload;
			state.rows = rows;
			state.columns = columns;
			state.cells = cells;
			const createdMatrix = createMatrix(rows, columns);
			state.matrix = createdMatrix;
			state.sortedMatrix = createdMatrix.flat().sort((a, b) => a.amount - b.amount);
		},
		addRow: (state, action) => {
			const addOneRow = createMatrix(1, action.payload);
			state.matrix.push(...addOneRow);
			state.rows += 1;
		},
		deleteRow: (state, action) => {
			const updateMatrixArr = state.matrix.filter((_, index) => index !== action.payload);
			state.matrix = updateMatrixArr;
			state.rows -= 1;
		},
		incrementFrame: (state, action) => {
			const matrixWithIncrementCell = state.matrix.map(row =>
				row.map(cell =>
					cell.id.toString().toLowerCase() === action.payload.toString().toLowerCase()
						? { ...cell, amount: cell.amount + 1 }
						: cell
				)
			);
			state.matrix = matrixWithIncrementCell;
		},
		onMouseLeave: (state, action) => {
			state.closesIdArr = [];
		},
		onCellHover: (state, action) => {
			let flattedMatrix = state.matrix.flat();
			let nearest: ICell[] = [];
			for (let i = 0; i < state.cells; i++) {
				nearest = [
					...nearest,
					flattedMatrix.reduce((a: ICell, b: ICell) => {
						return Math.abs(b.amount - action.payload.amount) < Math.abs(a.amount - action.payload.amount) ? b : a;
					}, flattedMatrix[0]),
				];
				flattedMatrix.splice(
					flattedMatrix.findIndex(item => {
						return item.amount === nearest[i].amount;
					}),
					1
				);
			}
			state.closesIdArr = nearest;
		},

		// onCellHover: (state, action) => {
		// 	if (!state.cells) return;
		// 	const elementIndex = state.sortedMatrix.findIndex((item: ICell) => item.id === action.payload.id);
		// 	if (elementIndex === 0) {
		// 		const values = state.sortedMatrix.slice(1, state.cells + 1);
		// 		state.closesIdArr = values;
		// 	} else if (elementIndex === state.sortedMatrix.length - 1) {
		// 		const values = state.sortedMatrix.slice(-state.cells - 1, -1);
		// 		state.closesIdArr = values;
		// 	} else {
		// 		let nearest: Array<ICell> = [];
		// 		let copiedSortedMatrix = [...state.sortedMatrix];
		// 		// let iterator = state.cells;
		// 		for (let i = 0; i < state.cells; i++) {
		// 			const currentElementIndex = copiedSortedMatrix.findIndex((item: ICell) => item.id === action.payload.id);
		// 			if (currentElementIndex === 0) {
		// 				const element = copiedSortedMatrix[1];
		// 				nearest = nearest.concat(element);

		// 				copiedSortedMatrix = copiedSortedMatrix.filter(item => item.id !== element.id);
		// 				return;
		// 			}
		// 			if (currentElementIndex === copiedSortedMatrix.length - 1) {
		// 				const element = copiedSortedMatrix[copiedSortedMatrix.length - 1];
		// 				nearest = nearest.concat(element);
		// 				copiedSortedMatrix = copiedSortedMatrix.filter(item => item.id !== element.id);
		// 				return;
		// 			}
		// 			const prevElement = copiedSortedMatrix[currentElementIndex - 1];
		// 			const nextElement = copiedSortedMatrix[currentElementIndex + 1];
		// 			const prevElementDiff = action.payload.amount - prevElement.amount;
		// 			const nextElementDiff = nextElement.amount - action.payload.amount;
		// 			if (prevElementDiff > nextElementDiff) {
		// 				nearest = nearest.concat(nextElement);
		// 				copiedSortedMatrix = copiedSortedMatrix.filter(item => item.id !== nextElement.id);
		// 			} else {
		// 				nearest = nearest.concat(prevElement);

		// 				copiedSortedMatrix = copiedSortedMatrix.filter(item => item.id !== prevElement.id);
		// 			}
		// 		}
		// 		state.closesIdArr = nearest;
		// 	}
		// 	// console.log(state.closesIdArr);
		// },
	},
});
