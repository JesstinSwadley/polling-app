import React from 'react'
import RegisterUserForm from '@/app/components/auth/RegisterUserForm'

interface User {
	username: string,
	password: string
}

function AuthRegisterPage() {
	return (
		<>
			<h1>User Registration</h1>

			<RegisterUserForm />
		</>
	)
}

export default AuthRegisterPage