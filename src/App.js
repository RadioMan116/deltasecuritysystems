import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import CharacterDetail from './pages/Card/[id]';
import MainLayout from './layout/MainLayout';
import NotFound from './pages/404/404';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
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
							<Route
								path='/404'
								element={<NotFound />}
							/>
						</Route>
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
