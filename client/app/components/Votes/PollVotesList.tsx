import React from 'react'

type Votes = {
	id: number,
	option_id: number,
	poll_id: number
}

const PollVotesList = async () => {
	const res = await fetch(`${process.env.NODE_API}/votes/list`);

	const votes: Votes[] = await res.json();

	return (
		<ul>
			{votes.map(vote => <li key={vote.id}>{}</li>)}
		</ul>
	)
}

export default PollVotesList