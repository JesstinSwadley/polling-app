import React from "react"
import { redirect } from "next/navigation";

function UserDashboardPage() {
	const token = localStorage.getItem('token');

	if (!token) {
		redirect("/auth/login");
	}

	return (
		<>
			<h1>User Dashboard</h1>
		</>
	)
}

export default UserDashboardPage;