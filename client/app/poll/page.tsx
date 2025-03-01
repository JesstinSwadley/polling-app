import PollForm from "../components/PollForm";

interface Polls {
	id: number,
	title: string
}

const PollPage = async () => {
	const res = await fetch('http://localhost:8080/all-polls')

	const polls: Polls[] = await res.json();

	return (
		<div>
			<h1>Current Polls</h1>
			<ul>
				{polls.map(poll => <li key={poll.id}>{poll.title}</li>)}
			</ul>

			<h2>Current Polls</h2>
			<PollForm />
		</div>
	)
}

export default PollPage;