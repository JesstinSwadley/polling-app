import React from 'react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav>
			<Link href={`/polls`}>Create New Poll</Link>
		</nav>
	)
}

export default Navbar