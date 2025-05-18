interface Poll {
	title: string
}

import React from 'react'

const PollCard = (polls: Poll ) => {
	return (
		<div>
			<p>{polls.title}</p>
		</div>
	)
}

export default PollCard