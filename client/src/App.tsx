import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Nav from './components/Nav';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />

				<main>
					<Routes>
						<Route
							path='/'
							Component={Home} />
						
						<Route
							path='/login'
							Component={Login} />

						<Route
							path='/register'
							Component={Register} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	)
}

export default App
