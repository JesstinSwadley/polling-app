import PollForm from "../components/PollForm";

interface Polls {
	id: number,
	title: string
}

const PollPage = async () => {
	const res = await fetch('http://localhost:8080/polls/all')

	const polls: Polls[] = await res.json();

	return (
		<>
			<h1>Current Polls</h1>
			<ul>
				{polls.map(poll => <li key={poll.id}>{poll.title}</li>)}
			</ul>

			<div
				className="flex flex-col justify-center items-center">	
				<h2
					className="text-4xl m-4">Create A New Poll</h2>

				<PollForm />
			</div>
		</>
	)
}

export default PollPage;