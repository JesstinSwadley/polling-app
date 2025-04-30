import React from 'react'

type Poll = {
	id: number,
	question: string 
}

const HomePollList = async () => {
	const res = await fetch(`${process.env.NODE_API}/polls/get-all`);

	const polls: Poll[] = await res.json();

	return (
		<div>
			{polls.map(poll => <li key={poll.id}><span>{poll.question}</span></li>)}
		</div>
	)
}

export default HomePollList