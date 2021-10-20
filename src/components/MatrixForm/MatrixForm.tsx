import { FC } from 'react';
import s from './MatrixForm.module.scss';

const MatrixForm: FC = () => {
	return (
		<div className={s.matrix_form}>
			<h2 className={s.matrix_form__title}>Matrix builder</h2>
			<div className={s.matrix_form__block}>
				<span className={s.matrix_form__text}>Enter the number of columns</span>
				<input className={s.matrix_form__first_input} type="number" /> <br />
			</div>
			<div className={s.matrix_form__block}>
				<span className={s.matrix_form__text}>Enter the number of rows</span>
				<input className={s.matrix_form__input} type="number" /> <br />
			</div>
			<div className={s.matrix_form__block}>
				<span className={s.matrix_form__text}>Enter the number of cells</span>
				<input className={s.matrix_form__input} type="number" /> <br />
			</div>

			<button className={s.matrix_form__button} type="button">
				Create matrix
			</button>
		</div>
	);
};

export default MatrixForm;
