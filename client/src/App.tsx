import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Nav from './components/Nav';

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
					</Routes>
				</main>
			</BrowserRouter>
		</>
	)
}

export default App
