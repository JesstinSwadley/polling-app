import React from 'react'
import Link from 'next/link'

interface Poll {
	title: string,
	id: number
}

const PollCard = (polls: Poll ) => {
	return (
		<div>
			<Link href={`/polls/${polls.id}`}>{polls.title}</Link>
		</div>
	)
}

export default PollCard