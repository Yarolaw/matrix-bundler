import { FC } from 'react';
import s from './MatrixForm.module.scss';

const MatrixForm: FC = () => {
	return (
		<div className={s.matrixForm}>
			<h2 className={s.matrixForm__title}>Matrix builder</h2>
			<div className={s.matrixForm__block}>
				<span className={s.matrixForm__text}>Enter the number of columns</span>
				<input className={s.matrixForm__input} type="number" />
			</div>
			<div className={s.matrixForm__block}>
				<span className={s.matrixForm__text}>Enter the number of rows</span>
				<input className={s.matrixForm__input} type="number" />
			</div>
			<div className={s.matrixForm__block}>
				<span className={s.matrixForm__text}>Enter the number of cells</span>
				<input className={s.matrixForm__input} type="number" />
			</div>

			<button className={s.matrixForm__button} type="button">
				Create matrix
			</button>
		</div>
	);
};

export default MatrixForm;
