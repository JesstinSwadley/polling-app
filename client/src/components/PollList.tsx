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

						<button className="mr-3 px-4 py-2 rounded bg-amber-400 text-stone-900 font-semibold hover:bg-amber-500">Edit</button>

						<button className="mr-3 px-4 py-2 rounded bg-red-600 text-zinc-100 font-semibold hover:bg-red-700">Delete</button>
					</div>
				))
			}
		</div>
	)
}

export default PollList