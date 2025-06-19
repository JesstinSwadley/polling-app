import React from 'react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className="bg-gray-800">
			<div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
				<div>
					<span>Link</span>
					<ul>
						<li>
							<Link href={`/polls`}>Create New Poll</Link>
						</li>
						<li>
							<Link href={`/polls/update`}>Update Poll</Link>
						</li>
						<li>
							<Link href={`/polls/delete`}>Delete Poll</Link>
						</li>
					</ul>
				</div>
				
				<div>
					<span>Options</span>
					<ul>
						<li>
							<Link href={`/options`}>Create New Option</Link>
						</li>
						<li>
							<Link href={`/options/update`}>Update Option</Link>
						</li>
						<li>
							<Link href={`/options/delete`}>Delete Option</Link>
						</li>
					</ul>
				</div>
			</div>

		</nav>
	)
}

export default Navbar