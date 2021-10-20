import { FC } from 'react';
import s from './MatrixForm.module.css';

const MatrixForm: FC = () => {
	return (
		<div className={s.matrixForm}>
			<h2 className={s.title}>Matrix builder</h2>
			<span className={s.formText}>Enter the number of columns</span>
			<input className={s.inputNumber} type="number" /> <br />
			<span className={s.formText}>Enter the number of rows</span>
			<input className={s.inputNumber} type="number" /> <br />
			<span className={s.formText}>Enter the number of cells</span>
			<input className={s.inputNumber} type="number" /> <br />
			<button type="button">Create matrix</button>
		</div>
	);
};

export default MatrixForm;
