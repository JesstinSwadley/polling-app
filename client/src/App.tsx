import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Nav from './components/layouts/Nav';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

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

						<Route
							path='/forgot-password'
							Component={ForgotPassword} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	)
}

export default App
