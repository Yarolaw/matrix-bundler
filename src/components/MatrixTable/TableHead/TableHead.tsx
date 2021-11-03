import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StoreType } from '../../../redux/store';

const TableHead: FC = () => {
	const matrixRecords = useSelector((state: StoreType) => state.matrixReducer.matrix);
	return (
		<thead>
			<tr>
				<th scope="col">№</th>
				{new Array(matrixRecords[0].length).fill(null).map((_, index) => (
					<th scope="col">{index + 1}</th>
				))}
				<th scope="col">Sum</th>
			</tr>
		</thead>
	);
};

export default TableHead;
