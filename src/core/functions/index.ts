import { nanoid } from 'nanoid';
import { ICell } from '../interfaces';

export const createMatrix = (rows: number, columns: number) => {
	let matrix: Array<Array<ICell>> = [];
	for (let i = 0; i < rows; i++) {
		matrix = [...matrix, []];
	}
	const readyMatrix = matrix.map(_row =>
		new Array(columns).fill(null).map(_el => ({
			id: nanoid(),
			amount: Math.floor(Math.random() * (999 - 100 + 1) + 100),
		}))
	);
	return readyMatrix;
};

export const calcPercentOfSumRow = (element: ICell | number, sum: number | null) => {
	if (!sum) return 0;
	const currentAmount = typeof element === 'number' ? element : element.amount;
	return Math.floor((currentAmount * 100) / sum);
};
