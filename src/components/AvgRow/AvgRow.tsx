import { FC, useState } from 'react';
import { calcPercentOfSumRow } from '../../core/functions';
import s from './AvgRow.module.scss';

type AvgRowProps = {
	average: number[] | null;
	sumAvg: number | null;
};

const AvgRow: FC<AvgRowProps> = ({ average, sumAvg }) => {
	const [isSumHovered, setIsSumHovered] = useState(false);

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
