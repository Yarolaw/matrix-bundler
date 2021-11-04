/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './MatrixForm.module.scss';

import { MatrixSlice } from '../../redux/MatrixSlice';
import SettingField from './SettingField';

const MatrixForm: FC = () => {
	const [columns, setColumns] = useState<number>(0);
	const [rows, setRows] = useState<number>(0);
	const [cells, setCells] = useState<number>(0);

	const { setMatrixSettings } = MatrixSlice.actions;

	const dispatch = useDispatch();

	const submitSettings = () => {
		if (columns && rows) {
			dispatch(setMatrixSettings({ rows, columns, cells }));
		}
	};

	return (
		<>
			<div className={s.matrixForm}>
				<h2 className={s.matrixForm__title}>Matrix builder</h2>
				<SettingField
					title="Enter the number of columns"
					value={columns}
					changeHandler={(columnsValue: number) => setColumns(columnsValue)}
				/>
				<SettingField
					title="Enter the number of rows"
					value={rows}
					changeHandler={(rowsValue: number) => setRows(rowsValue)}
				/>
				<SettingField
					title="Enter the number of cells"
					value={cells}
					changeHandler={(cellsValue: number) => setCells(cellsValue)}
				/>

				<button className={s.matrixForm__button} onClick={submitSettings} type="button">
					Create matrix
				</button>
			</div>

			{/* <div>
				{!!matrixRecords.length && (
					<>
						<button type="button" onClick={() => dispatch(addRow(columns))} className={s.addRowBtn}>
							Add row
						</button>

						<table className="table myTable">
							<thead>
								<tr>
									<th scope="col">№</th>
									{new Array(matrixRecords[0].length).fill(null).map((_, index) => (
										<th scope="col">{index + 1}</th>
									))}
									<th scope="col">Sum</th>
								</tr>
							</thead>
							<tbody>
								{matrixRecords.map((row, index) => (
									<MatrixRow key={row[0].id} row={row} rowName={index + 1} rowIndex={index} />
								))}
								<AvgRow />
							</tbody>
						</table>
					</>
				)}
			</div> */}
		</>
	);
};

export default MatrixForm;
