import { FC } from 'react';

const MatrixTable: FC = () => {
	const rundomNumber = () => Math.floor(Math.random() * 1000);
	return (
		<div>
			<button type="button">Add row</button>

			<table className="table">
				<thead>
					<tr>
						<th scope="col">№</th>
						<th scope="col">1</th>
						<th scope="col">2</th>
						<th scope="col">3</th>
						<th scope="col">4</th>
						<th scope="col">Sum</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
						<td>{rundomNumber()}</td>
					</tr>
					<tr>
						<th scope="row">Avg</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default MatrixTable;
