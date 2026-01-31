import React from 'react'
import RegisterForm from '../../components/auth/RegisterForm'

const Register = () => {
	return (
		<div className='min-h-screen flex items-center justify-center px-4 bg-white'>
			<div className='w-full max-w-md bg-white rounded-lg p-8'>
				<h2 
					className="text-2xl font-bold text-center text-black mb-6">
						Poll App
				</h2>

				<RegisterForm />
			</div>
		</div>
	)
}

export default Register;