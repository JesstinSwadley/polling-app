import React from 'react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav>
			<div>
				<span>Link</span>
				<Link href={`/polls`}>Create New Poll</Link>
				<Link href={`/polls/update`}>Update Poll</Link>
				<Link href={`/polls/delete`}>Delete Poll</Link>
			</div>
			
			<div>
				<span>Options</span>
				<Link href={`/options`}>Create New Option</Link>
				<Link href={`/options/update`}>Update Option</Link>
				<Link href={`/options/delete`}>Delete Option</Link>
			</div>
		</nav>
	)
}

export default Navbar