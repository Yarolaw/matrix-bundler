/* eslint-disable prefer-const */
/* eslint-disable no-loop-func */
/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createMatrix } from '../core/functions';
import { ICell } from '../core/interfaces';

interface IMatrix {
	matrix: Array<Array<ICell>>;
	rows: number;
	columns: number;
	cells: number;
	closestIdsArr: Array<ICell>;
}
export const initialState: IMatrix = {
	matrix: [],
	rows: 0,
	columns: 0,
	cells: 0,
	closestIdsArr: [],
};
export const MatrixSlice = createSlice({
	name: 'matrix',
	initialState,
	reducers: {
		setMatrixSettings: (state, action) => {
			const { rows, columns, cells } = action.payload;
			const createdMatrix = createMatrix(rows, columns);
			state.rows = rows;
			state.columns = columns;
			state.cells = cells;
			state.matrix = createdMatrix;
		},
		addRow: (state, action) => {
			const newRow = createMatrix(1, action.payload);
			state.matrix.push(...newRow);
		},
		deleteRow: (state, action) => {
			const updateMatrixArr = state.matrix.filter((_, index) => index !== action.payload);
			state.matrix = updateMatrixArr;
		},
		incrementCell: (state, action) => {
			const matrixWithIncrementCell = state.matrix.map(row =>
				row.map(cell =>
					cell.id.toString().toLowerCase() === action.payload.toString().toLowerCase()
						? { ...cell, amount: cell.amount + 1 }
						: cell
				)
			);
			state.matrix = matrixWithIncrementCell;
		},
		onCellLeave: (state, action) => {
			state.closestIdsArr = [];
		},
		onCellHover: (state, action) => {
			let flattedMatrix = state.matrix.flat();
			let copiedFlattedMatrix = flattedMatrix;
			let closestIds: ICell[] = [];
			for (let i = 0; i < state.cells; i++) {
				closestIds = [
					...closestIds,
					copiedFlattedMatrix.reduce((a: ICell, b: ICell) => {
						return Math.abs(b.amount - action.payload.amount) < Math.abs(a.amount - action.payload.amount) ? b : a;
					}, copiedFlattedMatrix[0]),
				];
				copiedFlattedMatrix.splice(
					copiedFlattedMatrix.findIndex(item => {
						return item.id === closestIds[i].id;
					}),
					1
				);
			}

			state.closestIdsArr = closestIds;
		},
	},
});
