import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";

import { appRoutes } from "./router/app.routes";
import { authRoutes } from "./router/auth.routes";

export default function AppRouter() {
	return (
		<BrowserRouter>
		<Routes>
			<Route 
				element={<MainLayout />}>
				{appRoutes}
			</Route>

			<Route 
				element={<AuthLayout />}>
				{authRoutes}
			</Route>
		</Routes>
		</BrowserRouter>
	);
}
