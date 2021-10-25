import { FC } from 'react';
import './App.css';
import MatrixForm from './components/MatrixForm/MatrixForm';
import MatrixTable from './components/MatrixTable/MatrixTable';

const App: FC = () => {
	return (
		<div className="App">
			<MatrixForm />
			{/* <MatrixTable /> */}
		</div>
	);
};

export default App;
