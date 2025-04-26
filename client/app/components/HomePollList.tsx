import React from 'react'

const HomePollList = () => {
	const Polls = [
		{
			name: "Poll 1",
			id: 1
		},
		{
			name: "Poll 2",
			id: 2
		}
	]

	return (
		<div>
			{Polls.map(poll => <li key={poll.id}><span>{poll.name}</span></li>)}
		</div>
	)
}

export default HomePollList