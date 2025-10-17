import { useEffect, useState } from "react";

// Assign Backend API URL to variable
const API_URL = import.meta.env.VITE_API_URL

type Poll = {
	id: number,
	query: string,
}

const PollList = () => {
	const [polls, setPolls] = useState<Poll[]>([]);

	useEffect(() => {
		const fetchPolls = async () => {
			const res = await fetch(`${API_URL}/v1/polls/list-all`);

			const pollsList: Poll[] = await res.json();

			setPolls([...pollsList]);
		}

		fetchPolls();
	}, []);

	return (
		<div>
			<ol>
				{
					polls.map(poll => <li key={poll.id}>{poll.query}</li>)
				}
			</ol>
		</div>
	)
}

export default PollList