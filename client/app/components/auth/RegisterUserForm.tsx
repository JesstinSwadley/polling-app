'use client';
import React from 'react'
import { redirect } from 'next/navigation'

function RegisterUserForm() {

	const FormAction = async (formData: FormData) => {
		try {
			const username = formData.get('usernameInput');
			const password = formData.get('passwordInput');
	
			await fetch('http://localhost:8080/auth/register', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					username,
					password
				})
			});

			redirect(`/login`);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<form 				
				className="flex flex-col bg-white rounded-lg p-8 space-y-4"
				action={FormAction}>
					
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="usernameInput">
							Username
					</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id='usernameInput'
						name='usernameInput'
						type="text" />
				</div>

				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="passwordInput">
							Password
					</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id='passwordInput'
						name='passwordInput'
						type="password" />
				</div>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Register
				</button>
			</form>
		</>
	)
}

export default RegisterUserForm