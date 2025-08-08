import React from 'react'

type Choice = {
	id: number,
	value: string,
	poll_id: number
}

const PollChoicesList = async () => {
	const res = await fetch(`${process.env.NODE_API}/choices/get-all`);

	const choices: Choice[] = await res.json();

	return (
		<ul>
			{choices.map(choice => <li key={choice.id}>{choice.value}</li>)}
		</ul>
	)
}

export default PollChoicesList