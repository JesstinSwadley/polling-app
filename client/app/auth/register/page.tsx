import React from 'react'
import RegisterForm from '@/app/components/auth/RegisterForm'

interface User {
	username: string,
	password: string
}

function AuthRegisterPage() {
	return (
		<>
			<h1>User Registration</h1>

			<RegisterForm />
		</>
	)
}

export default AuthRegisterPage