import { FC } from 'react';
import s from './MatrixForm.module.scss';

const MatrixForm: FC = () => {
	return (
		<div className={s.matrixForm}>
			<h2 className={s.title}>Matrix builder</h2>
			<div className={s.formTextBlock}>
				<span className={s.formText}>Enter the number of columns</span>
				<input className={s.firstInputNumber} type="number" /> <br />
			</div>
			<div className={s.formTextBlock}>
				<span className={s.formText}>Enter the number of rows</span>
				<input className={s.inputNumber} type="number" /> <br />
			</div>
			<div className={s.formTextBlock}>
				<span className={s.formText}>Enter the number of cells</span>
				<input className={s.inputNumber} type="number" /> <br />
			</div>

			<button className={s.createMatrixBtn} type="button">
				Create matrix
			</button>
		</div>
	);
};

export default MatrixForm;
