import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import CharacterDetail from './pages/Card/[id]';
import MainLayout from './layout/MainLayout';

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route
						path='/'
						element={<MainLayout />}
					>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/characters/:id'
							element={<CharacterDetail />}
						/>
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
