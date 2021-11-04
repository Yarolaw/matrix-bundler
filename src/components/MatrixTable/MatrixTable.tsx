import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MatrixSlice } from '../../redux/MatrixSlice';
import { StoreType } from '../../redux/store';

import TableHead from './TableHead/TableHead';
import s from './MatrixTable.module.scss';
import TableBody from './TableBody/TableBody';

const MatrixTable: FC = () => {
	const matrixRecords = useSelector((state: StoreType) => state.matrixReducer.matrix);
	const columns = useSelector((state: StoreType) => state.matrixReducer.columns);

	const dispatch = useDispatch();
	const { addRow } = MatrixSlice.actions;

	return (
		<div>
			{!matrixRecords.length ? (
				<span>At first, set settings for matrix</span>
			) : (
				<>
					<button type="button" onClick={() => dispatch(addRow(columns))} className={s.addRowBtn}>
						Add row
					</button>

					<table className="table myTable">
						<TableHead />
						<TableBody />
					</table>
				</>
			)}
		</div>
	);
};

export default MatrixTable;
