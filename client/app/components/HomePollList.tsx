import React from 'react'
import PollCard from './PollCard';

type Poll = {
	id: number,
	question: string 
}

const HomePollList = async () => {
	const res = await fetch(`${process.env.NODE_API}/polls/get-all`);

	const polls: Poll[] = await res.json();

	return (
		<div>
			{polls.map(poll => <PollCard key={poll.id} title={poll.question}/>)}
		</div>
	)
}

export default HomePollList