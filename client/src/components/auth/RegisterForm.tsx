import React from 'react'
import { Link } from 'react-router';
import FormInput from '../ui/FormInput';

// Assign Backend API URL to variable
const API_URL = import.meta.env.VITE_API_URL

const RegisterForm = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form: HTMLFormElement = e.target as HTMLFormElement;
		const formData: FormData = new FormData(form);

		const username = formData.get("username");
		const password = formData.get("password");

		await fetch(`${API_URL}/v1/auth/register`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
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
				<FormInput 
					name='username'
					type='text'
					placeholder='Username'
					required
				/>

				<FormInput 
					name='password'
					type='password'
					placeholder='Password'
					required
				/>

				<FormInput 
					name='confirmPassword'
					type='password'
					placeholder='Confirm Pasword'
					required
				/>

					<button
						type="submit"
						className="w-full py-3 rounded-lg bg-blue-600 text-lg font-bold text-white hover:bg-blue-700 transition-colors">
							Register
					</button>


				<hr 
					className="border-black/80"/>

				<Link
					className="text-center text-base font-semibold text-black hover:underline"
					to="/login">
						Already Have An Account?
				</Link>
			</form>
		</>
	)
}

export default RegisterForm