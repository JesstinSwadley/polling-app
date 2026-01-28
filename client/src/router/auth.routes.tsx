import { Route } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

export const authRoutes = (
	<>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/forgot-password" element={<ForgotPassword />} />
	</>
);
