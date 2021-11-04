import { FC } from 'react';
import s from './SettingField.module.scss';

type SettingFieldProps = {
	title: string;
	value: number;
	changeHandler: (value: number) => void;
};

const SettingField: FC<SettingFieldProps> = ({ title, value, changeHandler }) => {
	return (
		<div className={s.matrixForm__block}>
			<span className={s.matrixForm__text}>{title}</span>
			<input
				value={value || ''}
				onChange={e => changeHandler(+e.target.value)}
				className={s.matrixForm__input}
				type="number"
				min="1"
				max="99"
			/>
		</div>
	);
};

export default SettingField;
