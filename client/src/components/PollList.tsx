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
		<div
			className="">
			{
				polls.map(poll => (
					<div
						className="rounded shadow-lg p-4" 
						key={poll.id}>
						<h3
							className="font-bold text-xl mb-2">
								{poll.query}
						</h3>
					</div>
				))
			}
		</div>
	)
}

export default PollList