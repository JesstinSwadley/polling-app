import React from 'react'
import { Link } from 'react-router'

const Login = () => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-white'>
			<div className='w-full max-w-md bg-white rounded-lg p-8'>
				<h2 
					className="text-2xl font-bold text-center text-black mb-6">
						Poll App
				</h2>
				<form
					className="flex flex-col gap-6"
					
					action="">
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
						to="#">
							Need to register?
					</Link>
				</form>
			</div>
		</div>
	)
}

export default Login