import { FC, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { calcPercentOfSumRow } from '../../core/functions';
import { StoreType } from '../../redux/store';
import s from './AvgRow.module.scss';

const AvgRow: FC = () => {
	const [isSumHovered, setIsSumHovered] = useState(false);
	const matrixRecords = useSelector((state: StoreType) => state.matrixReducer.matrix);

	const average = useMemo(() => {
		if (!matrixRecords.length) return null;
		let sumAr: Array<number> = [];

		for (let i = 0; i < matrixRecords[0].length; i++) {
			let currentSum = 0;
			for (let j = 0; j < matrixRecords.length; j++) {
				currentSum += matrixRecords[j][i].amount;
			}
			sumAr = [...sumAr, Math.round(currentSum / matrixRecords.length)];
		}
		return sumAr;
	}, [matrixRecords]);

	const sumAvg = useMemo(
		() =>
			!average
				? null
				: average.reduce((acc, el) => {
						return acc + el;
				  }, 0),
		[average]
	);

	return (
		<tr>
			<th scope="row">Avg</th>

			{average?.map(current => {
				return (
					<th
						className={s.row__th}
						style={
							isSumHovered
								? {
										background: `linear-gradient(to top, red 0%, #fff ${calcPercentOfSumRow(current, sumAvg)}%)`,
								  }
								: undefined
						}
						scope="row"
					>
						{isSumHovered ? `${calcPercentOfSumRow(current, sumAvg)}%` : current}
					</th>
				);
			})}
			<th
				className={s.row__th}
				scope="row"
				onMouseEnter={() => setIsSumHovered(true)}
				onMouseLeave={() => setIsSumHovered(false)}
			>
				{sumAvg}
			</th>
		</tr>
	);
};

export default AvgRow;
