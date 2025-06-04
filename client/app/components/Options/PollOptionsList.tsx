import React from 'react'

type Option = {
	id: number,
	value: string,
	poll_id: number
}

const PollOptionsList = async () => {
	const res = await fetch(`${process.env.NODE_API}/options/get-all`);

	const options: Option[] = await res.json();

	return (
		<ul>
			{options.map(option => <li key={option.id}>{option.value}</li>)}
		</ul>
	)
}

export default PollOptionsList