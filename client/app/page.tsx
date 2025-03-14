import React from "react";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<main>
				<h1>Polling App</h1>

				<div>
					<Link href="/auth/register">Register</Link>
					<Link href="/auth/login">Login</Link>
				</div>

				<div>
					<Link href="/polls/create">Create Polls</Link>
					<Link href="/polls/update">Update Poll</Link>
					<Link href="/polls/delete">Delete Poll</Link>
				</div>

				<div>
					<Link href="/user/1/dashboard">User Dashboard</Link>
					<Link href="/user/1/poll/closed">User Closed Poll</Link>
					<Link href="/user/1/poll/active">User Active Poll</Link>
					<Link href="/user/1/poll/draft">User Draft Poll</Link>
				</div>
				
				<Link href="/options">Options</Link>
			</main>
		</div>
	);
}
