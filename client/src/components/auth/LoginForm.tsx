import React from 'react'
import { Link } from 'react-router'

// Assign Backend API URL to variable
const API_URL = import.meta.env.VITE_API_URL

const LoginForm = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form: HTMLFormElement = e.target as HTMLFormElement;
		const formData: FormData = new FormData(form);

		const username = formData.get("username");
		const password = formData.get("password");

		await fetch(`${API_URL}/v1/auth/login`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				username,
				password
			})
		});
	}

	return (
		<>
			<form
				className="flex flex-col gap-6"
				onSubmit={handleSubmit}>
					<input
						name="email"
						type="text"
						className="w-full py-3 px-4 rounded-md bg-gray-100 text-lg font-semibold placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Email"
						/>

					<input
						name="password"
						type="password"
						className="w-full py-3 px-4 rounded-md bg-gray-100 text-lg font-semibold placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Password"
						/>

					<button
						type="submit"
						className="w-full py-3 rounded-lg bg-blue-600 text-lg font-bold text-white hover:bg-blue-700 transition-colors">
							Login
					</button>

					<hr 
						className="border-black/80"/>

					<Link
						className="text-center text-base font-semibold text-black hover:underline"
						to="#">
							Forgot Password?
					</Link>

					<Link
						className="text-center text-base font-semibold text-black hover:underline"
						to="/register">
							Need to register?
					</Link>
			</form>
		</>
	)
}

export default LoginForm