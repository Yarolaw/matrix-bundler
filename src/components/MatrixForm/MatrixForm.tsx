import { FC, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import s from './MatrixForm.module.scss';

interface ICell {
	id: number | string;
	amount: number;
}

const createMatrix = (rows: number, columns: number) => {
	let matrix: Array<Array<ICell>> = [];
	for (let i = 0; i < rows; i++) {
		matrix = [...matrix, []];
	}
	const readyMatrix = matrix.map(arr => {
		for (let i = 0; i < columns; i++) {
			const newElement: ICell = {
				id: nanoid(),
				amount: Math.floor(Math.random() * 1000),
			};
			// eslint-disable-next-line no-param-reassign
			arr = [...arr, newElement];
		}
		return arr;
	});
	return readyMatrix;
};

const avg = (currentMatrix: Array<Array<ICell>>, columnsNumber: number, rowsNumber: number) => {
	let sumAr: Array<number> = [];
	for (let i = 0; i < columnsNumber; i++) {
		let currentSum = 0;
		for (let j = 0; j < rowsNumber; j++) {
			currentSum += currentMatrix[j][i].amount;
		}
		sumAr = [...sumAr, Math.round(currentSum / rowsNumber)];
	}
	return sumAr;
};
const MatrixForm: FC = () => {
	const [columns, setColumns] = useState<number | null>(null);
	const [rows, setRows] = useState<number | null>(null);
	const [cells, setCells] = useState<number | null>(null);
	const [matrix, setMatrix] = useState<Array<Array<ICell>>>([]);
	const [average, setAverage] = useState<Array<number>>([]);

	const sumAvg = average.reduce((acc, el) => {
		return acc + el;
	}, 0);

	const handleClick = () => {
		if (columns && rows) {
			const newMatrix = createMatrix(rows, columns);
			setMatrix(newMatrix);
		}
	};

	const sum = matrix.map(row => {
		const sumArr = row.reduce((acc, el) => {
			return acc + el.amount;
		}, 0);

		return sumArr;
	});

	const handleAddRow = () => {
		if (columns && rows) {
			setRows(rows + 1);
			setMatrix(prev => [...prev, createMatrix(1, columns).flat()]);
		}
	};

	useEffect(() => {
		if (columns && rows) {
			setAverage(avg(matrix, columns, rows));
		}
	}, [matrix]);

	return (
		<>
			<div className={s.matrixForm}>
				<h2 className={s.matrixForm__title}>Matrix builder</h2>
				<div className={s.matrixForm__block}>
					<span className={s.matrixForm__text}>Enter the number of columns</span>
					<input
						value={columns || ''}
						className={s.matrixForm__input}
						type="number"
						onChange={e => setColumns(Number(e.target.value))}
						min="1"
						max="9999"
					/>
				</div>
				<div className={s.matrixForm__block}>
					<span className={s.matrixForm__text}>Enter the number of rows</span>
					<input
						value={rows || ''}
						onChange={e => setRows(Number(e.target.value))}
						className={s.matrixForm__input}
						type="number"
						min="1"
						max="9999"
					/>
				</div>
				<div className={s.matrixForm__block}>
					<span className={s.matrixForm__text}>Enter the number of cells</span>
					<input
						value={cells || ''}
						onChange={e => setCells(Number(e.target.value))}
						className={s.matrixForm__input}
						type="number"
						min="1"
						max="9999"
					/>
				</div>

				<button className={s.matrixForm__button} onClick={handleClick} type="button">
					Create matrix
				</button>
			</div>

			<div>
				{!!matrix.length && (
					<>
						<button type="button" onClick={handleAddRow} className={s.addRowBtn}>
							Add row
						</button>

						<table className="table table-success table-striped">
							<thead>
								<tr>
									<th scope="col">№</th>
									{new Array(columns).fill(null).map((_, index) => (
										<th scope="col">{index + 1}</th>
									))}
									<th scope="col">Sum</th>
								</tr>
							</thead>
							<tbody>
								{matrix.map((row, index) => (
									<tr>
										<th scope="row">{index + 1}</th>
										{row.map(element => (
											<td>{element.amount}</td>
										))}
										<th scope="row">{sum[index]}</th>
									</tr>
								))}
								<tr>
									<th scope="row">Avg</th>
									{average.map((_, index) => {
										return <th scope="row">{average[index]}</th>;
									})}
									<th scope="row">{sumAvg}</th>
								</tr>
							</tbody>
						</table>
					</>
				)}
			</div>
		</>
	);
};

export default MatrixForm;
