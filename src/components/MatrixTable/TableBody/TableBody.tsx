import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StoreType } from '../../../redux/store';

import AvgRow from '../../AvgRow/AvgRow';
import MatrixRow from '../../MatrixRow/MatrixRow';

const TableBody: FC = () => {
	const matrixRecords = useSelector((state: StoreType) => state.matrixReducer.matrix);
	return (
		<tbody>
			{matrixRecords.map((row, index) => (
				<MatrixRow key={row[0].id} row={row} rowName={index + 1} rowIndex={index} />
			))}
			<AvgRow />
		</tbody>
	);
};

export default TableBody;
