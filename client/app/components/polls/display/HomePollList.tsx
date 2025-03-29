import React from 'react'
import PollCard from "@/app/components/polls/display/PollCard";

type Poll = {
	id: number,
	title: string,
}

const HomePollList = async () => {
	const res = await fetch('http://localhost:8080/polls/all')

	const polls: Poll[] = await res.json();

	return (
		<>
			<div>
				{polls.map(poll => <PollCard key={poll.id} title={poll.title}/>)}
			</div>
		</>
	)
}

export default HomePollList;