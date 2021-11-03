/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calcPercentOfSumRow } from '../../core/functions';
import { ICell } from '../../core/interfaces';
import { MatrixSlice } from '../../redux/MatrixSlice';
import { StoreType } from '../../redux/store';
import s from './MatrixRow.module.scss';

type MatrixRowProps = {
	row: Array<ICell>;
	rowName: number | string;
	rowIndex: number;
};

const MatrixRow: FC<MatrixRowProps> = ({ row, rowName, rowIndex }) => {
	const [isSumHovered, setIsSumHovered] = useState(false);

	const { deleteRow, incrementCell, onCellHover, onCellLeave } = MatrixSlice.actions;

	const dispatch = useDispatch();

	const sumRow = row.reduce((acc, el) => acc + el.amount, 0);
	const percentOfSumRow = useCallback((element: ICell) => calcPercentOfSumRow(element, sumRow), [sumRow]);

	const nearestArr = useSelector((state: StoreType) => state.matrixReducer.closestIdsArr);

	return (
		<tr>
			<th scope="row">{rowName}</th>
			{row.map(element => (
				<td
					key={element.id}
					onClick={() => dispatch(incrementCell(element.id))}
					onMouseEnter={() => dispatch(onCellHover(element))}
					onMouseLeave={() => dispatch(onCellLeave(true))}
					style={
						isSumHovered
							? {
									background: `linear-gradient(to top, red 0%, #fff ${percentOfSumRow(element)}%)`,
							  }
							: nearestArr.find(nearest => nearest.id === element.id)
							? { background: '#FFFF00' }
							: undefined
					}
				>
					{isSumHovered ? `${percentOfSumRow(element)}%` : element.amount}
				</td>
			))}
			<th
				className={s.row__th}
				scope="row"
				onMouseEnter={() => setIsSumHovered(true)}
				onMouseLeave={() => setIsSumHovered(false)}
			>
				{sumRow}
			</th>
			<i onClick={() => dispatch(deleteRow(rowIndex))} className="material-icons">
				delete_forever
			</i>
		</tr>
	);
};

export default MatrixRow;
