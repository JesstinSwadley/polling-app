import React from 'react'
import Link from "next/link";

function Navbar() {
	return (
		<>
			<div className='w-full h-20 sticky bg-blue-600 top-0'>
				<div className='container mx-auto px-4 h-full'>
					<div className='flex justify-between items-center h-full'>
						<ul className='hidden md:flex gap-x-6 text-white'>
							<li>
								<Link href="/auth/register">
									<span>Register</span>
								</Link>
							</li>

							<li>
								<Link href="/auth/login">
									<span>Login</span>
								</Link>
							</li>
						</ul>

						<ul className='hidden md:flex gap-x-6 text-white'>
							<li>
								<Link href="/polls/create">
									<span>Create Poll</span>
								</Link>
							</li>
							<li>
								<Link href="/polls/update">
									<span>Update Poll</span>
								</Link>
							</li>
							<li>
								<Link href="/polls/delete">
									<span>Delete Poll</span>
								</Link>
							</li>
						</ul>

						{/* <ul className='hidden md:flex gap-x-6 text-white'>
							<li>
								<Link href="/user/1/dashboard">
									<span>User Dashboard</span>
								</Link>
							</li>
							<li>
								<Link href="/user/1/poll/closed">User Closed Poll</Link>
							</li>
							<li>
								<Link href="/user/1/poll/active">User Active Poll</Link>
							</li>
							<li>
								<Link href="/user/1/poll/draft">User Draft Poll</Link>
							</li>
						</ul> */}

						<Link href="/options">Options</Link>
					</div>					
				</div>
			</div>
		</>
	)
}

export default Navbar;